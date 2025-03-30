---
title: 浏览器 之  业务场景
subtitle: 
layout: post
date: 2024-10-30
author: heavenmei
categories:
  - Note
description: 
tags:
  - Web
image:
---

## 懒加载
按需加载
  1. 浏览一个网页，准备往下拖动滚动条
  2. 拖动一个占位图片到视窗
  3. 占位图片被瞬间替换成最终的图片
  
### 内联图片

一张图片就是一个`<img>`标签，浏览器是否发起请求图片是根据`<img>`的src属性，所以实现懒加载的关键就是，在图片没有进入可视区域时，先不给`<img>`的src赋值，这样浏览器就不会发送请求了，等到图片进入可视区域再给src赋值。

```js
<img class="lazy" src="placeholder-image.jpg" data-src="image-to-lazy-load-1x.jpg" data-srcset="image-to-lazy-load-2x.jpg 2x, image-to-lazy-load-1x.jpg 1x" alt="I'm an image!">
```

- class：用于在JavaScript中关联元素
- src属性：指向了一张占位图片，图片在页面的第一次加载会显现
- data-src和data-srcset属性：这是占位属性，里面放的是目标图片的url


> 方法一：监听一些事件比如scroll或者resize来检测元素出现在视窗

`scrollTop+clientHeight > offsetTop`

```js
//性能损耗，不建议使用，但若浏览器不兼容Observer则需使用
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});
```


> 方法二：利用intersectionObserver

```js
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    
    //兼容性
    if (!('IntersectionObserver' in window)) {
        return;
    }
    
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
//      回调函数将会在元素可见性变化时被调用。
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          // 取消监听
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    
    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });

});
 
```

### CSS图像

相比较而言，CSS加载图片比较容易控制。当文档对象模型、CSS对象模型和渲染树被构造完成后，开始请求外部资源之前，浏览器会检测CSS规则是怎么应用到DOM上的。**如果浏览器检测到CSS引用的外部资源并没有应用到已存在的DOM节点上，浏览器就不会请求这些资源。** 这个行为可用于延迟CSS图片资源的加载，思路是通过JavaScript检测到元素处于视窗中时，加一个class类名，这个class就引用了外部图片资源。 这可以实现图片按需加载而不是一次性全部加载。

```html
 <div class="lazy-background">
  <h1>Here's a hero heading to get your attention!</h1>
  <p>Here's hero copy to convince you to buy a thing!</p>
  <a href="/buy-a-thing">Buy a thing!</a>
</div>
<style>
 .lazy-background {
  background-image: url("hero-placeholder.jpg"); /* 占位图片 */
}

.lazy-background.visible {
  background-image: url("hero.jpg"); /* 真正的图片 */
}
</style>
 <script>
 //利用JavaScript去检测元素是否处于视窗（intersection observer）
 //如果可见就为它加上一个visible的类名。

 document.addEventListener("DOMContentLoaded", function() {
  var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});
</script>
```

    



## 网站安全

前端常见安全问题的7个方面：
1. iframe
2. opener
3. CSRF（跨站请求伪造）
4. XSS（跨站脚本攻击）
5. ClickJacking（点击劫持）
6. HSTS（HTTP严格传输安全）
7. CND劫持


#### XSS（跨站脚本攻击）

通过将恶意得Script代码注入到Web页面中，当用户浏览该页之时，嵌入其中Web里面的Script代码会被执行，从而达到恶意攻击用户的目的。

XSS防御总结：
1. 数据进行严格的输出编码：如HTML元素的编码，JS编码，CSS编码，URL编码等等
	- 避免拼接 HTML；Vue/React 技术栈，避免使用 v-html / dangerouslySetInnerHTML
2. CSP HTTP Header，即 Content-Security-Policy、X-XSS-Protection
	  - 增加攻击难度，配置CSP(本质是建立白名单，由浏览器进行拦截)
	  - Content-Security-Policy: default-src 'self'-所有内容均来自站点的同一个源（不包括其子域名）
	  - Content-Security-Policy: default-src 'self' *.trusted.com-允许内容来自信任的域名及其子域名 (域名不必须与CSP设置所在的域名相同)
	  - Content-Security-Policy: default-src https://yideng.com-该服务器仅允许通过HTTPS方式并仅从yideng.com域名来访问文档
3. 输入验证：比如一些常见的数字、URL、电话号码、邮箱地址等等做校验判断
4. 开启浏览器XSS防御：Http Only cookie，禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。
5. 验证码

#### CSRF（跨站请求伪造）

用户以当前身份浏览到flash或者第三方网站时，JS/flash可以迫使用户浏览器向任意CGI发起请求，此请求包含用户身份标识，CGI如无限制则会以用户身份进行操作。




## CSR，SSR，SSG

- CSR：Client Side Rendering ，客户端渲染。
- SSR：Server Side Rendering，服务端渲染。
- SSG：Static Site Generation ，静态站点生成。


| &emsp;&emsp; | 特点                                                           | 优点&emsp;&emsp;&emsp;    | 缺点                                                                     |
| ------------ | ------------------------------------------------------------ | ----------------------- | ---------------------------------------------------------------------- |
| CSR          | vue，react等框架 <br/>先下载html文档<br/>然后下载js来执行渲染出页面结果             | 1. 前后端分离。<br/>2. 服务器压力小 | 1. 不利于SEO<br/>2. 首屏渲染慢，可以做成SPA，增量渲染                                    |
| SSR          | JSP、PHP等<br/>输出的是一个渲成的html                                   | 1. 利于SEO<br/>2. 利于首屏渲染  | 1. 占用服务器资源，渲染工作都在服务端渲染<br/>2. 用户体验不好，每次跳转到新页面都需要在重新服务端渲染整个页面，不能只渲染可变区域 |
| SSG          | 在构建的时候直接把结果页面输出html到磁盘，<br/>每次访问直接把html返回给客户端，<br/>相当于一个静态资源 | 1. 利于SEO<br/>2. 服务器压力小  | 1. 只适用于静态数据<br/>2. 用户体验不好，每次跳转到新页面都需要在重新服务端渲染整个页面，不能只渲染可变区域            |

[SSR](https://heavenmei.github.io/post/2022-09-10-SSR-base)

#### ISR：Incremental Site Rendering，
 
 增量式的网站渲染：
 - **关键性的页面**（如网站首页、热点数据等）预渲染为静态页面，缓存至 CDN，保证最佳的访问性能；

- **非关键性的页面**（如流量很少的老旧内容）先响应 fallback 内容，然后浏览器渲染（CSR）为实际数据；同时对页面进行异步预渲染，之后缓存至 CDN，提升后续用户访问的性能。



#### DPR：Distributed Persistent Rendering
 分布式的持续渲染：
 1. 去除了 fallback 行为，而是直接用 On-demand Builder（按需构建器）来响应未经过预渲染的页面，然后将结果缓存至 CDN；
 2. 数据页面过期时，不再响应过期的缓存页面，而是 CDN 回源到 Builder 上，渲染出最新的数据；
 3. 每次发布新版本时，自动清除 CDN 的缓存数据。


## Monorepo






## Reference

[CSR，SSR和SSG是什么，有什么优缺点？](https://juejin.cn/post/7039151040188383268)