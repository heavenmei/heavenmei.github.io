---
title: 微信小程序登录流程
subtitle: 
layout: post
date: 2024-12-09
author: heavenmei
categories:
  - Post
description: 
tags:
  - Web
image:
---

一个简单的用户系统需要关注至少这些层面

- 安全性(加密)
- 持久化登录态(类似cookie)
- 登录过期处理
- 确保用户唯一性, 避免出现多账号
- 授权
- 绑定用户昵称头像等信息
- 绑定手机号(实名和密保方式)


## 登录流程
- 通过wx.login()获取code。
- 将这个code发送给后端，后端会返回一个token，这个token将作为你身份的唯一标识。
- 将token通过wx.setStorageSync()保存在本地存储。
- 用户下次进入⻚面时，会先通过wx.getStorageSync() 方法判断token是否有值，如果有值，则可以请求其它数据，如果没有值，则进行登录操作。


![](assets/2024-12-09-wechat-login-20241209112239.png)

- `appId` 小程序唯一标识
- `appSecret` 小程序的 app secret, 可以和 code, appId 一起换取 session_key



**注意⚠️**
1. 会话密钥 `session_key` 是对用户数据进行 [加密签名](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) 的密钥。为了应用自身的数据安全，开发者服务器**不应该把会话密钥下发到小程序，也不应该对外提供这个密钥**。
2. 临时登录凭证 code 只能使用一次


## OAuth
>  在微信小程序中，oauth 授权登录主要是 code 换取 openId 和 sessionKey 的过程

OAuth在"客户端"与"服务提供商"之间，设置了一个授权层（authorization layer）。"客户端"不能直接登录"服务提供商"，只能登录授权层，以此将用户与客户端区分开来。"客户端"登录授权层所用的令牌（token），与用户的密码不同。用户可以在登录的时候，指定授权层令牌的权限范围和有效期。
"客户端"登录授权层以后，"服务提供商"根据令牌的权限范围和有效期，向"客户端"开放用户储存的资料。


在这里，我们服务端采用[Lucia](https://lucia-auth.com/)实现, Lucia 是服务器的一个开源身份验证库，它消除了处理会话的复杂性。它与您的数据库一起工作，提供易于使用、理解和扩展的 API。*但是自2025年3月开始不再维护*。



首先在迁前端小程序中，`wx.login()`获取临时code，然后传回给开发服务器

>2021年4月起小程序不再支持`wx.getUserInfo`获取，需要用`wx.getUserProfile`替换。而且必须是用户点击后调用，不然会报错（规矩真多💢）
>`Error: MiniProgramError {"errMsg":"getUserProfile:fail can only be invoked by user TAP gesture."}`


```js
export const loginProfile = async (app) => {
  // promisify是封装的wx 异步函数
  const res = await promisify(wx.getUserProfile)({
    desc: "用于完善会员资料",
  });
  const { code } = await promisify(wx.login)();

  // login是传回自己服务的login接口，返回自定义登录态data
  const { data } = await login({
    code,
    ...res.userInfo,
  });
  // 缓存登录态
  wx.setStorageSync("userInfo", data);

  const userId = data.id;
  startDuration(app, userId);
  return data;
};
```


在服务器中实现`/login`接口
```js

// POST
export async function login(c: Context) {
  const body = await c.req.json();
  const { code } = UserParamsSchema.parse(body);

  const { data } = await axios.get(
    "https://api.weixin.qq.com/sns/jscode2session",
    {
      params: {
        appid: serverEnvs.WX_APPID,
        secret: serverEnvs.WX_SECRET,
        js_code: code,
        grant_type: "authorization_code",
      },
    }
  );
  logger.info("user", data);

  let curUser = null;
  try {
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.id, data.openid))
      .limit(1);

    if (existingUser.length === 0) {
      curUser = {
        id: data.openid,
        session_key: data.session_key,
        name: nickName,
        avatar: avatarUrl,
      };
      await db.insert(users).values(curUser);
    } else {
      curUser = existingUser[0];
    }
  } catch (e: any) {
    return c.json(
      failRes({
        message: e.detail,
      })
    );
  }

  const session = await lucia.createSession(data.openid, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  setCookie(c, lucia.sessionCookieName, sessionCookie.value);

  return c.json(successRes({ ...curUser }));
}
```


##  openid, unionid , code, session_key

**openid**
openid是用来唯一标识用户的一个字符串。在微信小程序中，每个用户的openid都是唯一的。通过openid，小程序可以获取用户的基本信息，如头像、昵称等。

 > 注意： 同一个用户在不同的小程序中拥有不同的openid。因此，在开发小程序时，不能使用openid来进行用户的唯一性判断


**unionid**
unionid是在用户绑定同一微信开放平台账号下的多个应用时，用来唯一标识用户的一个字符串。如果用户在多个小程序中使用同一个微信号进行登录授权，那么这些小程序中的unionid都是相同的。

> 注意： 用户的unionid只有在用户将多个应用绑定到同一个微信开放平台账号下时才会生成。因此，如果用户没有绑定多个应用，那么小程序将无法获取用户的unionid。


**code**
code是用户登录凭证，由微信服务器颁发给小程序。在用户授权登录后，小程序可以通过调用微信登录接口获取用户的code。然后，通过code向微信服务器请求用户的openid和session_key等信息。
> **注意：** **每个code只能使用一次，且有效期为5分钟。因此，在使用code进行登录时，需要及时将其转换成用户的openid和session_key等信息，以免出现code过期的情况**


**session_key**
会话密钥, 服务端通过 [code2Session](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/code2Session.html) 获取
session_key有点类似于我们在数据库中保存用户密码时所使用的“盐（salt）”。在数据库保存用户密码时，并不是直接将用户的密码以明文的方式存放在数据库表中，通常都会使用SHA-1或者MD5算法将用户密码和salt随机字符串拼接在一起，重新计算一下再存入数据库中。被重新使用SHA-1或MD5算法计算的用户密码谁都不知道是什么，开发者也只能比对每次登录时输入的密码和数据库保存的密码是否一致，判断是否为合法用户，却无法知道密码到底是什么。

> 因为session_key 存在时效性问题（毕竟是用来查看敏感信息），而小程序前端可以通过wx.checkSession() 来检查session_key 是否过期。所以可以通过这个来作为保存用户登录态的机制，这也是小程序文档中推荐的方法：




## 自定义登录态持久化

浏览器有 cookie, 然而小程序没有 cookie, 因此，使用小程序自己的**持久化**接口, 也就是 setStorage 和 getStorage，给http response headers**种上 cookie**。
这里使用[@chunpu/http](https://github.com/chunpu/http) 实现，这是一个专门为小程序设计的 http 请求库, 可以在小程序上像 axios 一样发请求, 支持拦截器等强大功能, 甚至比 axios 更顺手

在login接口 response 拦截器

```js
http.interceptors.response.use((response) => {
  // 种 cookie
  var { headers } = response;
  var cookies = headers["set-cookie"] || "";

  cookies = cookies.split(/, */).reduce((prev, item) => {
    item = item.split(/; */)[0];
    var obj = http.qs.parse(item);
    return Object.assign(prev, obj);
  }, {});
  if (cookies) {
    return promisify(wx.getStorage)({
      key: "cookie",
    })
      .catch(() => {})
      .then((res) => {
        res = res || {};

        var allCookies = res.data || {};
        Object.assign(allCookies, cookies);
        return promisify(wx.setStorage)({
          key: "cookie",
          data: allCookies,
        });
      })
      .then(() => {
        return response;
      });
  }
  return response;
});
```


当然我们还需要在发请求的时候**带上所有 cookie**, 此处用的是 request 拦截器
```js
http.interceptors.request.use((config) => {
  // 给请求带上 cookie
  return promisify(wx.getStorage)({
    key: "cookie",
  })
    .catch(() => {})
    .then((res) => {
      if (res && res.data) {
        Object.assign(config.headers, {
          Cookie: http.qs.stringify(res.data, ";", "="),
        });
      }
      return config;
    });
});

```


登录态 cookie 是有失效时间的, 比如一天, 七天, 或者一个月。 小程序已经帮我们实现好了 session 有效期的判断 `wx.checkSession`
>通过 wx.login 接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效

`app.js`

```js



```




## Reference
[彻底搞懂小程序登录流程-附小程序和服务端](https://github.com/75team/w3c/blob/master/articles/20181001_chunpu_%E5%BD%BB%E5%BA%95%E6%90%9E%E6%87%82%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%99%BB%E5%BD%95%E6%B5%81%E7%A8%8B-%E9%99%84%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%92%8C%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%BB%A3%E7%A0%81.md)