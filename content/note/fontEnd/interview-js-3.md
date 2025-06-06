---
title: JS面试 之 手撕篇 (三)
subtitle: 
layout: post
date: 2022-09-13
author: heavenmei
categories:
  - Note
description: 
tags:
  - JS
image:
---
## 大厂手写题


### 1、防抖函数

| 操作  | 描述                             | 场景                                                                       |
| --- | ------------------------------ | ------------------------------------------------------------------------ |
| 防抖  | 频繁触发但是只触发**最后一次**<br />期间清空定时器 | 1、电脑息屏时间，每动一次电脑又重新计算时间<br /> 2、input框变化频繁触发事件可加防抖 <br />3、频繁点击按钮提交表单可加防抖 |
| 节流  | 频繁触发但是只出发**第一次**<br />期间多次触发不管 | 1、滚动频繁请求列表可加节流 <br />2、游戏里长按鼠标，但是动作都是每隔一段时间做一次                           |

```js
function debounce(fn, delay) {
  let task = null;
  return function () {
    if (task) {
      clearTimeout();
      task = null;
    }
    task = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
```

### 2、节流函数

```js
function throttle(fn, delay) {
  let task = null;
  return function () {
    if (!task) {
      task = setTimeout(() => {
        task = null;
        fn.apply(this, arguments);
      }, delay);
    }
  };
}
```


### 3、深拷贝 & 浅拷贝

浅拷贝：只拷贝第一层，深层的依然是引用，改变深层会影响原对象

eg. `Object.assign()`、`...扩展符`、`Array.form()/slice()/map()/concat()/解构`

```js
function shallowCop(obj) {
  let newObj = Array.isArray(obj) ? [] : {};
  for (let item in obj) {
    newObj[item] = obj[item];
  }
  return newObj;
}
```

深拷贝：每一层都拷贝了，改变数据不会影响原对象

eg.`JSON.parse()/JSON.stringfy`、递归拷贝

```js
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function deepCopy(obj) {
  if(obj === null || typeof obj !== 'object'){
      return obj;
  }
	
  let newObj = Array.isArray() ? [] : {};
  
  for (let item in obj) {
    if (obj.hasOwnPropertype(item)) {
      newObj[item] = deepCopy(obj[item]);
    }
  }
  return newObj;
}
```

全面版
```js
const tagMap = {
  mapTag: "[object Map]",
  setTag: "[object Set]",
  arrayTag: "[object Array]",
  objectTag: "[object Object]",
  symbolTag: "[object Symbol]",
  regexpTag: "[object RegExp]",
};

const checkType = (target) => {
  return Object.prototype.toString.call(target);
};

const checkTemp = (target) => {
  const c = target.constructor;
  return new c();
};

const cloneSymbol = (target) => {
  return Object(Symbol.prototype.valueOf.call(target));
};

const cloneReg = (target) => {
  const reFlags = /\w*$/;
  const result = new target.constructor(target.source, reFlags.exec(target));
  result.lastIndex = target.lastIndex;
  return result;
};

const deepClone = (target, map = new Map()) => {
  const type = checkType(target);

  if (!Object.values(tagMap).includes(type)) {
    return target;
  }

  if (type === tagMap.symbolTag) {
    return cloneSymbol(target);
  }
  if (type === tagMap.regexpTag) {
    return cloneReg(target);
  }

  const temp = checkTemp(target);

  if (map.get(target)) {
    return map.get(target);
  }

  map.set(target, temp);

  if (type === tagMap.setTag) {
    target.forEach((value) => {
      temp.add(deepClone(value, map));
    });
  }

  if (type === tagMap.mapTag) {
    target.forEach((value, key) => {
      temp.set(key, deepClone(value, map));
    });
  }

  for (const key in target) {
    temp[key] = deepClone(target[key], map);
  }
  return temp;
};
```


### 4、实现 new 过程

- 1、创建一个空对象
- 2、继承构造函数的原型
- 3、this指向obj，并调用构造函数
- 4、返回对象

```js
function myNew(fn, ...args) {
  const obj = {};

  obj.__proto__ = fn.prototype;

  fn.apply(obj, args);

  return obj;
}
```


### 5、发布订阅模式

实现 on、off、emit、once。提示 cache 二维数组

```js
class EventEmitter {
  constructor() {
    this.cache = [];
  }

  on(name, fn) {
    const tasks = this.cache[name];
    if (tasks) {
      tasks.push(fn);
    } else {
      this.cache[name] = [fn];
    }
  }

  off(name, fn) {
    if (!name) {
      this.cache = [];
      return;
    }
    const tasks = this.cache[name];
    if (tasks) {
      if (!fn) {
        this.cache[name] = [];
      }
      const index = tasks.findIndex((item) => item === fn);
      if (index >= 0) {
        tasks.splice(index, 1);
      }
    }
  }

  emit(name, ...args) {
    // 复制一份。防止回调里继续on，导致死循环
    const tasks = this.cache[name].slice();
    if (tasks) {
      for (let task of tasks) {
        task(...args);
      }
    }
  }

  once(name, cb) {
    const fn = (...args) => {
      cb(...args);
      this.off(name, fn);
    };
    this.on(name, fn);
  }
}
```


### 6、打乱一个数组

```js
// 方法1
const shuffle = (arr) => {
  return arr.sort(() => {
    return Math.random() > 0.5 ? 1 : -1;
  });
};

// 方法2
const shuffle = (arr) => {
  let i = arr.length;
  while (i) {
    let j = (Math.floor(Math.random() * i--)[(arr[j], arr[i])] = [
      arr[i],
      arr[j],
    ]);
  }
};
```

### 7、数组去重

```js
// 方法1
const quchong = (arr) => {
  return [...new Set(arr)];
};

// 方法2
const quchong = (arr) => {
  const res = [];
  arr.reduce((pre, next) => {
    if (!pre.has(next)) {
      pre.set(next, 1);
      res.push(next);
    }
    return pre;
  }, new Map());

  return res;
};
```

### 7、setTimeout 实现 setInterval

```js
function mySetInterval(fn, delay, times) {
  times--;
  if (!times) {
    clearTimeout();
    return;
  }

  let timer = setTimeout(() => {
    fn();
    mySetInterval(fn, delay, times);
  }, delay);
}
function fn() {
  console.log("1");
}
mySetInterval(fn, 1000, 10);
```

### 8、setInterval 实现 setTimeout

```js
const mySetTimeout = (fn, delay) => {
  const timer = setInterval(() => {
    fn();
    clearInterval(timer);
  }, delay);
};
```

### 9、compose 函数

```js
function fn1(x) {
  return x + 1;
}

function fn2(x) {
  return x + 2;
}

function fn3(x) {
  return x + 3;
}

function fn4(x) {
  return x + 4;
}
const compose = (...fns) => {
  if (fns.length === 0) return (num) => num;
  if (fns.length === 1) return fns[0];
  return fns.reduce((pre, next) => {
    return (num) => {
      return pre(next(num));
    };
  });
};
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+2+3+4=11
```

### 10、curring 函数

```js
const add = (a, b, c) => a + b + c;
const currying = (fn, ...args) => {
  let allArgs = [...args];
  const num = fn.length;
  const res = (...args2) => {
    allArgs = [...allArgs, ...args2];
    if (allArgs.length === num) {
      return fn(...allArgs);
    } else {
      return res;
    }
  };
  return res;
};
const a = currying(add, 1);
console.log(a(2)(3)); // 1 + 2 + 3=6
```

### 11、LRU 算法

最近最少使用算法（Least Recently Use），广泛的应用于缓存机制中。当缓存使用的空间达到上限后，就需要从已有的数据中淘汰一部分以维持缓存的可用性，而淘汰数据的选择就是通过LRU算法完成的。

[146. LRU 缓存](https://leetcode.cn/problems/lru-cache/)

```js
class LRUCache {
  constructor(size) {
    this.size = size;
    this.cache = new Map();
  }
  get(key) {
    const hasKey = this.cache.has(key);
    if (!hasKey) {
      return -1;
    } else {
      const val = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, val);
      return val;
    }
  }
  put(key, value) {
    const hasKey = this.cache.has(key);
    if (hasKey) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.size) {
	  // 按插入顺序排列
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}
```

### 13、DOM 转 对象

```js
const dom2tree = (node) => {
  const obj = {};
  obj.tag = node.tagName;
  obj.children = [];
  node.childNodes.forEach((child) => obj.children.push(dom2tree(child)));
  return obj;
};
```

### 14、对象 转 DOM

```js
function _render(vnode) {
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }

  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(attrs).forEach((key) => {
      const attr = artts[key];
      dom.setAttribute(key, attr);
    });
  }
  vnode.children.forEach((child) => dom.appenChild(_render(child)));

  return dom;
}
```

### 15、判断对象环引用

```js
const cycleDetector = (obj) => {
  const arr = [obj];
  let flag = false;

  const cycle = (o) => {
    const values = Object.values(o);
    for (let value of values) {
      if (typeof value === "object" && value !== null) {
        if (arr.includes(value)) {
          flag = true;
          return;
        }
        arr.push(value);
        cycle(value);
      }
    }
  };

  cycle(obj);

  return flag;
};
```

### 16、计算对象的层数

```js
const loopGetLevel = (obj) => {
  let num = 1;

  const computed = (obj, level) => {
    level = level || 0;
    if (typeof obj === "object" && obj !== null) {
      Object.values(obj).forEach((v) => {
        if (typeof v === "object" && v !== null) {
          computed(v, level + 1);
        } else {
          num = level + 1 > num ? level + 1 : num;
        }
      });
    } else {
      num = level > num ? level : num;
    }
  };
  computed(obj);

  return num;
};
```

### 17、对象的扁平化

```js
const flatten = (obj) => {
  if (!isObject(obj)) return;
  const res = {};
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        for (let i in cur) {
          dfs(cur[i], `${prefix}[${i}]`);
        }
      } else {
        for (let i in cur) {
          dfs(cur[i], `${prefix}${prefix ? "." : ""}${i}`);
        }
      }
    } else {
      res[prefix] = cur;
    }
  };
  dfs(obj, "");

  return res;
};
```

### 18、(a == 1 && a == 2 && a == 3)

```js
// 第一种方法
var a = {
  i: 1,
  toString: function () {
    return a.i++;
  },
};
console.log(a == 1 && a == 2 && a == 3); // true

// 第二种方法
var a = [1, 2, 3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3); // true

// 第三种方法
var val = 0;
Object.defineProperty(window, "a", {
  get: function () {
    return ++val;
  },
});
console.log(a == 1 && a == 2 && a == 3); // true
```

### 20、lazyMan 函数

要求：

```js
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
```

解题：

```js
class _lazyMan {
  constructor(name) {
    const fn = () => {
      console.log(`Hi! This is ${name}`);
      this.next();
    };
    this.tasks = [];
    this.tasks.push(fn);
    setTimeout(() => {
      this.next();
    });
  }
  next() {
    const task = this.tasks.shift();
    task && task();
  }
  sleep(delay) {
    this.sleepWrapper(delay);
    return this;
  }
  sleepFirst(delay) {
    this.sleepWrapper(delay, true);
    return this;
  }
  sleepWrapper(time, first) {
    const fn = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    if (first) {
      this.tasks.unshift(fn);
    } else {
      this.tasks.push(fn);
    }
  }
  eat(food) {
    const fn = () => {
      console.log(`Eat ${food}`);
      this.next();
    };
    this.tasks.push(fn);
    return this;
  }
}

const LazyMan = (name) => {
  return new _lazyMan(name);
};
```

### 21、add 函数 柯里化

要求：实现一个 add 方法 使计算结果能够满足如下预期：

- add(1)(2)(3)()=6
- add(1,2,3)(4)()=10

解题：

```js
function add(...args1) {
  let allArgs = [...args1];

  const fn = (...args2) => {
    allArgs = [...args1, ...args2];

    return fn;
  };

  fn.toString = function () {
    return allArgs.reduce((pre, next) => {
      return pre + next;
    });
  };

  return fn;
}
```


### 22、实现原生 AJAX 封装

```js
const ajax = {
  get(url, fn) {
    // 创建 xhr 对象
    const xhr = new XMLHttpRequest();
    // method:要是用的HTTP方法，url：请求的主体，async(可选)：false为同步，true为异步，默认为同步
    xhr.open("GET", url, true);
    // 只要 readyState 属性发生变化，就会调用相应的处理函数。
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // 从服务器端返回文本。
          fn(xhr.responseText);
        }
      }
    };
    xhr.send();
  },
  post(url, fn, data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // 从服务器端返回文本。
          fn(xhr.responseText);
        }
      }
    };
    xhr.send(data);
  },
};
```

```js
//原生Ajax封装成Promise
var myNewAjax = function (url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        resolve(json);
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        reject("error");
      }
    };
  });
};
```

### 23、计算 LocalStorage 总容量

```js
let str = "0123456789";
let temp = "";
// 先做一个 10KB 的字符串
while (str.length !== 10240) {
  str = str + "0123456789";
}

// 先清空
localStorage.clear();

const computedTotal = () => {
  return new Promise((resolve) => {
    // 不断往 LocalStorage 中累积存储 10KB
    const timer = setInterval(() => {
      try {
        localStorage.setItem("temp", temp);
      } catch {
        // 报错说明超出最大存储
        resolve(temp.length / 1024 - 10);
        clearInterval(timer);
        // 统计完记得清空
        localStorage.clear();
      }
      temp += str;
    }, 0);
  });
};

(async () => {
  const total = await computedTotal();
  console.log(`最大容量${total}KB`);
})();
```

## Promise 方法


[三心的手写 Promise 原理，最通俗易懂的版本！](https://mp.weixin.qq.com/s?__biz=Mzg2NjY2NTcyNg==&mid=2247484956&idx=1&sn=daad0f4436573d8dbc06470e9d3daf9c&chksm=ce46138df9319a9bffb3ed4ba98910174a0313f20dca9251e530bc1ee2e60fa85a0d381c3f98&scene=21#wechat_redirect)

### async/await

```js
const toAsync = (fn) => {
  return function () {
    const gen = fn.apply(this.arguments);

    return new Promise((resolve, reject) => {
      function go(key, arg) {
        let res;
        try {
          res = gen[key](arg);
        } catch (e) {
          return reject(e);
        }

        const { value, done } = res;
        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value)
            .then((val) => {
              go("next", val);
            })
            .catch((err) => {
              go("throw", err);
            });
        }
      }
      go("next");
    });
  };
};
```


### all （全对）

```js
Promise.sx_all = (promises) => {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      const promise = Promise.resolve(promises[i]);
      promise
        .then((res) => {
          result[i] = res;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
```

### race （竞争）

```js
Promise.sx_race = (promises) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      const promise = Promise.resolve(promises[i]);
      promise
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
```

### allSettled （不论对错）

```js
Promise.sx_allSettled = (promises) => {
    return new Promise((resolve) => {
        const result = []
        let count = 0
        const addData = (status, value, i) => {
            result[i] = {
                status,
                value
            }
            count++
            if (count === promises.length) {
                resolve(result)
            }
        }
        for (let i = 0; i < promises.length; i++) {
            const promise = Promise.resolve(promises[i])
            promise.then(res => {
                addData('fulfilled', res, i)
            }).catch(err => {
                addData('rejected', err, i)
            })
        }
    })
}
```

### any （任一对）

```js
Promise.sx_any = (promises) => {
    return new Promise((resolve, reject) => {
        let count = 0
        for (let i = 0; i < promises.length; i++) {
            const promise = Promise.resolve(promises[i])
            promise.then(res => {
                resolve(res)
            }).catch(err => {
                count++
                if (count === promises.length) {
                    reject('全错！！！')
                }
            })
        }
    })
}
```

### finally

```js
Promise.prototype.sx_finally = function (fn) {
  return this.then((res) => {
    fn()
    return res
  }).catch((err) => {
    fn()
    return err
  })
}
```



### Promise 并发器

JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个

addTask(1000,"1");
addTask(500,"2");
addTask(300,"3");
addTask(400,"4");
的输出顺序是：2 3 1 4

```js
class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.running = 0;
    this.queue = [];
  }

  addTask(duration, id) {
    const task = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(id);
          resolve();
        }, duration);
      });
    };

    this.queue.push(task);

    this.schedule();
  }

  schedule() {
    if (this.queue.length === 0 || this.running >= this.limit) {
      return;
    }

    this.running++;
    const task = this.queue.shift();

    task().then(() => {
      this.running--;
      this.schedule();
    });
  }
}

const scheduler = new Scheduler(2);

scheduler.addTask(1000, "1");
scheduler.addTask(500, "2");
scheduler.addTask(300, "3");
scheduler.addTask(400, "4");
```

## 函数

### call 多参

```js
Function.prototype.my_call = function (obj, ...args) {
  obj = obj || window;
  const fn = Symbol();
  obj[fn] = this;
  // obj = {
  //   fn: foo,
  // };
  const res = obj[fn](...args);
  // 释放内存
  delete obj[fn];
  return res;
};
foo.call(obj); //返回执行结果
```

### apply 单参

```js
Function.prototype.my_apply = function (obj, args) {
  obj = obj || window;
  const fn = Symbol();
  obj[fn] = this;
  const res = obj[fn](...args);
  delete obj[fn];
  return res;
};
```

### bind 多参返回fn

```js
Function.prototype.my_bind = function (obj, ...args) {
  obj = obj || window;
  const _this = this;

  return function F(...innerArgs) {
    // 判断是否为构造函数 new
    if (this instanceof F) {
	    return new _this(...args,...innerArg);
    } else {
	    return _this.apply(obj, args.contact(innArgs);
    }
  };
};
```



## 数组方法

### 26、forEach

```js
Array.prototype.sx_forEach = (cb) => {
  for (let i = 0; i < this.length; i++) {
    cb && cb(this[i], i, this);
  }
};
```

forEach如何跳出循环？ throw-catch

```js
function getItemById(arr, id) {
  var item = null;
  try {
    arr.forEach(function (curItem, i) {
      console.log(i)
      if (curItem.id == id) {
        item = curItem;
        throw Error();
      }
    })
  } catch (e) {}
  return item;
}
```

### 27、map

```js
Array.prototype.sx_map = (cb) => {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res[i] = cb && cb(this[i], i, this);
  }
  return res;
};
```

### 28、filter

```js
Array.prototype.sx_filter = function (cb) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    cb && cb(this[i], i, this) && res.push(this[i]);
  }
  return res;
};
```

### 29、every

```js
Array.prototype.sx_every = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb && cb(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
```

### 30、some

```js
Array.prototype.sx_some = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb && cb(this[i], i, this)) {
      return true;
    }
  }
  return false;
};
```

### 31、reduce

```js
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

Array.prototype.sx_reduce = function (cb, ...args) {
  let pre,
    start = 0;
  if (args.length) {
    pre = args[0];
  } else {
    pre = this[0];
    start = 1;
  }
  for (let i = start; i < this.length; i++) {
    pre = cb(pre, this[i], i, this);
  }
  return pre;
};
```

### 32、findIndex

```js
Array.prototype.sx_findIndex = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb && cb(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};
```

### 33、find

```js
Array.prototype.sx_find = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb && cb(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
```

### 34、fill

```js
Array.prototype.sx_fill = function (value, start = 0, end) {
  end = end || this.length;
  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
};
```

### 35、include

```js
Array.prototype.sx_include = function (value, start = 0) {
  const isnan = Number.isNaN(value);
  for (let i = start; i < this.length; i++) {
    if (this[i] === value || (isnan && Number.isNaN(this[i]))) {
      return true;
    }
  }
  return false;
};
```

### 36、join

```js
Array.prototype.sx_join = function (str = ",") {
  let resStr = "";
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    resStr = i === 0 ? item : `${resStr}${str}${item}`;
  }
  return resStr;
};
```

### 37、flat

```js
Array.prototype.sx_flat = function (num = Infinity) {
  let arr = this,
    i = 0;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
    i++;
    if (i >= num) break;
  }
  return arr;
};
```

### 38、splice

```js
Array.prototype.sx_splice = function (start, length, ...values) {
  if (length === 0) return [];
  length = start + length > this.length - 1 ? this.length - start : length;
  console.log(length);
  const res = [],
    tempArr = [...this];
  for (let i = start; i < start + values.length; i++) {
    this[i] = values[i - start];
  }
  this.length = start + values.length;
  if (values.length < length) {
    const cha = length - values.length;
    for (let i = start + values.length; i < tempArr.length; i++) {
      this[i] = tempArr[i + cha];
    }
    this.length = this.length - cha;
  }
  if (values.length > length) {
    for (let i = start + length; i < tempArr.length; i++) {
      this.push(tempArr[i]);
    }
  }
  for (let i = start; i < start + length; i++) {
    res.push(tempArr[i]);
  }
  return res;
};
```

## 对象方法

### 39、entries

```js
Object.prototype.sx_entries = function (obj) {
    const res = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && (res.push([key, obj[key]]))
    }
    return res
}
```

### 40、fromEntries

```js
Object.prototype.sx_fromEntries = function (arr) {
    const obj = {}
    for (let item of arr) {
        const [key, value] = item
        obj[key] = item[value]
    }
    return obj
}
```

### 41、keys

```js
Object.prototype.sx_keys = function (obj) {
    const res = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && res.push(key)
    }
    return res
}
```

### 42、values

```js
Object.prototype.sx_values = function (obj) {
    const res = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && res.push(obj[key])
    }
    return res
}
```

### 43、instanceOf

```js
const instanceOf = function (parent, children) {
    const fp = parent.prototype
    let cp = children.__proto__
    while (cp) {
        if (fp === cp) {
            return true
        }
        cp = cp.__proto__
    }
    return false
}
```

### 44、is

```js
Object.prototype.sx_is = function (x, y) {
    if (x === y) {
        // 防止 +0 和 -0
        return x !== 0 && 1 / x === 1 / y
    }

    // 防止NaN
    return x !== x && y !== y
}
```

### 45、assign

```js
Object.prototype.sx_assign = function (target, ...args) {
    if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object')
    }

    target = Object(target)

    for (let obj of args) {
        for (let key in obj) {
            obj.hasOwnProperty(key) && (target[key] = obj[key])
        }
    }

    return target
}
```


## 字符串

### 54、slice

```js
String.prototype.sx_slice = function (start = 0, end) {
    start = start < 0 ? this.length + start : start
    end = !end && end !== 0 ? this.length : end

    if (start >= end) return ''
    let str = ''
    for (let i = start; i < end; i++) {
        str += this[i]
    }

    return str
}
```

### 55、substr

```js
String.prototype.sx_substr = function (start = 0, length) {
    if (length < 0) return ''

    start = start < 0 ? this.length + start : start
    length = (!length && length !== 0) || length > this.length - start ? this.length : start + length

    let str = ''
    for (let i = start; i < length; i++) {
        str += this[i]
    }
    return str
}
```

### 56、substring

```js
String.prototype.sx_sunstring = function (start = 0, end) {
    start = start < 0 ? this.length + start : start
    end = !end && end !== 0 ? this.length : end

    if (start >= end) [start, end] = [end, start]
    let str = ''
    for (let i = start; i < end; i++) {
        str += this[i]
    }

    return str
}
```

### 解析URL

使用 `new URL` 解析
```js
const url = new URL('https://example.com/path/to/resource?param1=value1&param2=value2#hash');

url = {
	protocol, // 输出: https:
	hostname, // 输出: example.com
	port, // 输出: (空字符串，因为没有指定端口)
	pathname, // 输出: /path/to/resource
	search, // 输出: ?param1=value1&param2=value2
	hash // 输出: #hash
}
// 获取查询参数
console.log(url.searchParams.get('param1')); // 输出: value1
```

使用 `URLSearchParams` 解析查询字符串
```js
const queryString = 'param1=value1&param2=value2';
const searchParams = new URLSearchParams(queryString);

// 获取单个参数
console.log(searchParams.get('param1')); // 输出: value1
```

手撕
```js
const urlString = 'https://example.com/path/to/resource?param1=value1&param2=value2#hash';

// 从后往前解析
function parseURL(url) {
  const [urlWithoutHash, hash] = url.split('#');
  const [urlWithoutQuery, query] = urlWithoutHash.split('?');
  const [protocol, hostWithPort] = urlWithoutQuery.split('//');
  const [host, port] = hostWithPort.split(':');
  const pathname = urlWithoutQuery.replace(/https?:\/\//, '');

  const searchParams = new URLSearchParams(query);

  return {
    protocol,
    host,
    port: port || (protocol === 'https:' ? '443' : '80'),
    pathname,
    search: query,
    hash: `#${hash}`,
    searchParams: Object.fromEntries(searchParams)
  };
}

const parsedURL = parseURL(urlString);
```