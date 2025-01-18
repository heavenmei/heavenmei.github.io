---
title: JS面试 之 手撕篇 (四)
subtitle: 
layout: post
date: 2022-09-14
author: heavenmei
categories:
  - Note
description: 
tags:
  - Front
image:
---

## 数组方法

### 26、forEach

```js
Array.prototype.sx_forEach = (cb) => {
    for (let i = 0; i < this.length; i++) {
        cb && cb(this[i], i, this)
    }
}
```

### 27、map

```js
Array.prototype.sx_map = (cb) => {
    const res = []
    for (let i = 0; i < this.length; i++) {
        res[i] = cb && cb(this[i], i, this)
    }
    return res
}
```

### 28、filter

```js
Array.prototype.sx_filter = function (cb) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        cb && cb(this[i], i, this) && (res.push(this[i]))
    }
    return res
}
```

### 29、every

```js
Array.prototype.sx_every = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (!cb && cb(this[i], i, this)) {
            return false
        }
    }
    return true
}
```

### 30、some

```js
Array.prototype.sx_some = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb && cb(this[i], i, this)) {
            return true
        }
    }
    return false
}
```

### 31、reduce

```js
Array.prototype.sx_reduce = function (cb, ...args) {
    let pre, start = 0
    if (args.length) {
        pre = args[0]
    } else {
        pre = this[0]
        start = 1
    }
    for (let i = start; i < this.length; i++) {
        pre = cb(pre, this[i], i, this)
    }
    return pre
}
```

### 32、findIndex

```js
Array.prototype.sx_findIndex = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb && cb(this[i], i, this)) {
            return i
        }
    }
    return -1
}
```

### 33、find

```js
Array.prototype.sx_find = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb && cb(this[i], i, this)) {
            return this[i]
        }
    }
    return undefined
}
```

### 34、fill

```js
Array.prototype.sx_fill = function (value, start = 0, end) {
    end = end || this.length
    for (let i = start; i < end; i++) {
        this[i] = value
    }
    return this
}
```

### 35、include

```js
Array.prototype.sx_include = function (value, start = 0) {
    const isnan = Number.isNaN(value)
    for (let i = start; i < this.length; i++) {
        if (this[i] === value || (isnan && Number.isNaN(this[i]))) {
            return true
        }
    }
    return false
}
```

### 36、join

```js
Array.prototype.sx_join = function (str = ',') {
    let resStr = ''
    for (let i = 0; i < this.length; i++) {
        const item = this[i]
        resStr = i === 0 ? item : `${resStr}${str}${item}`
    }
    return resStr
}
```

### 37、flat

```js
Array.prototype.sx_flat = function (num = Infinity) {
    let arr = this, i = 0
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
        i++
        if (i >= num) break
    }
    return arr
}
```

### 38、splice

```js
Array.prototype.sx_splice = function (start, length, ...values) {
    if (length === 0) return []
    length = start + length > this.length - 1 ? this.length - start : length
    console.log(length)
    const res = [], tempArr = [...this]
    for (let i = start; i < start + values.length; i++) {
        this[i] = values[i - start]
    }
    this.length = start + values.length
    if (values.length < length) {
        const cha = length - values.length
        for (let i = start + values.length; i < tempArr.length; i++) {
            this[i] = tempArr[i + cha]
        }
        this.length = this.length - cha
    }
    if (values.length > length) {
        for (let i = start + length; i < tempArr.length; i++) {
            this.push(tempArr[i])
        }
    }
    for (let i = start; i < start + length; i++) {
        res.push(tempArr[i])
    }
    return res
}
```

## 对象方法

### 39、entries

```
Object.prototype.sx_entries = function (obj) {
    const res = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && (res.push([key, obj[key]]))
    }
    return res
}
```

### 40、fromEntries

```
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

```
Object.prototype.sx_keys = function (obj) {
    const res = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && res.push(key)
    }
    return res
}
```

### 42、values

```
Object.prototype.sx_values = function (obj) {
    const res = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && res.push(obj[key])
    }
    return res
}
```

### 43、instanceOf

```
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

```
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

```
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

## Promise方法

### 46、all

```js
Promise.sx_all = (promises) => {
    return new Promise((resolve, reject) => {
        const result = []
        let count = 0
        for (let i = 0; i < promises.length; i++) {
            const promise = Promise.resolve(promises[i])
            promise.then(res => {
                result[i] = res
                count++
                if (count === promises.length) {
                    resolve(result)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}
```

### 47、race

```js
Promise.sx_race = (promises) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            const promise = Promise.resolve(promises[i])
            promise.then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        }
    })
}
```

### 48、allSettled

```
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

### 49、any

```
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

### 50、finally

```
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

## 函数

### 51、call

```js
Function.prototype.sx_call = function(obj, ...args) {
  obj = obj || window
  const fn = Symbol()
  obj[fn] = this
  const res = obj[fn](...args)
  delete obj[fn]
  return res
}
```

### 52、apply

```js
Function.prototype.sx_apply = function(obj, args) {
  obj = obj || window
  const fn = Symbol()
  obj[fn] = this
  const res = obj[fn](...args)
  delete obj[fn]
  return res
}
```

### 53、bind

```js
Function.prototype.sx_bind = function(obj, ...args) {
  obj = obj || window
  const fn = Symbol()
  obj[fn] = this
  const _this = this

  const res = function(...innerArgs) {
    console.log(this, _this)
    if (this instanceof _this) {
      this[fn] = _this
      this[fn](...[...args, ...innerArgs])
      delete this[fn]
    } else {
      obj[fn](...[...args, ...innerArgs])
      delete obj[fn]
    }
  }
  res.prototype = Object.create(this.prototype)
  return res
}
```

## 字符串

### 54、slice

```
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

```
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

```
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
