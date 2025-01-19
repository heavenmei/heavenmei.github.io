---
title: React Hooks 优化代码
subtitle: 
layout: post
date: 2022-09-09
author: heavenmei
categories:
  - Post
description: 
tags:
  - Front
image:
---
## 为什么需要Hooks

[React函数组件和类组件的差异](https://zhuanlan.zhihu.com/p/62767474)

## Hook 统一认识

1. 每一次渲染都有它自己的 Props && state
    
2. 每一次渲染都有它自己的事件处理函数
    
3. 每一次渲染都有它自己的 Effects
    
4. 每一次渲染都由它自己的...所有
    
5. 同步，而非生命周期
    

  

## 常用的Hooks

### useState:

set函数是异步执行的，无法在下一行立马拿到设置了新值的state。

set操作会引起组件re-render，因此必须在某个回调中调用，不应该出现在 Component 函数步调用栈中执行。

1. useState 要遵循 immutable
    
2. useState 适合存储基本变量或者强相关的简单对象数据，多状态独立更新数据更适合useReducer
    
3. 初始化时给的默认值只有组件第一次挂载的时候有效，之后会被hooks链缓存下相应值
    

使用规范

1. 将完全不相关的 state 拆分为多组 state。比如 `size` 和 `position`
    
2. 某些 state 是相互关联的，或者需要一起发生改变，就可以把它们合并为一组 state
    

  

### useReducer

```JavaScript
const initialState = { name: '张三', age: 20 };
function reducer(state, action) {
    switch(action.type) {
        case 'addAge':
            return { ...state, age: state.age + 1 };
        case 'setAge':
            return { ...state, age: action.value };
        case 'resetAge': {
            return initialState;
        }
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    // 惰性初始化
    // const [state, dispatch] = useReducer(reducer, initialState, (init) => init);
    
    return (
        <div>
            <p>{state.name}今年{state.age}</p>
            <button onClick={() => dispath({ type: 'addAge' })}>年龄加一</button>
            <button onClick={() => dispath({ type: 'setAge', value: 25 })}>设置年龄</button>
            <button onClick={() => dispath({ type: 'resetAge' })}>重置年龄</button>
        </div>
    );
}
```

> 1. 初始化时给的默认值只有组件第一次挂载的时候有效，之后会被hooks链缓存下相应值
>     
> 2. useReducer 相比useState更适合存储多状态更改的数据
>     
> 3. useReducer 也要遵循 immutable
>     

  

### useEffect

#### **❌错误使用--无限循环**

组件会更新，因此useEffect会再次执行，因此出现了无限循环的情况。我们只想在组件mount时请求数据。我们可以传递一个空数组作为useEffect的第二个参数，这样就能避免在组件更新执行useEffect，只会在组件mount时执行。

```TypeScript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState({ hits: [] });
    
    useEffect(async () => {
        const result = await axios('http://localhost/api/v1/search?query=redux',);
        setData(result.data);
    }, []);
    
    return (
        <ul>{data.hits.map(item => (
            <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
            </li>
            ))}
        </ul>
    );
}

export default App;
```

#### **❌错误使用--异步函数**

每个async函数都会默认返回一个隐式的promise。但是，useEffect不应该返回任何内容。

```TypeScript
 useEffect(async () => {
     const result = await axios(
         'http://localhost/api/v1/search?query=redux',
     );
     setData(result.data);
 }, []);
```

控制台会报Warning

> Warning: useEffect function must return a cleanup function or nothing. Promises and useEffect(async () => …) are not supported, but you can call an async function inside an effect

✅正确使用

```TypeScript
useEffect(() => {
   const fetchData = async () => {
       const result = await axios(
           'http://localhost/api/v1/search?query=redux',
       );
       setData(result.data);
   };
   fetchData();
}, []);
```

### ~~useContext~~

可用其他状态管理替换

  

### useRef

当需要存放一个数据，需要无论在哪里都取到最新状态时，需要使用 useRef。

```JavaScript
// 存储常量
const countRef = useRef(0);

// 引用元素
const domRef = useRef(null);
<div ref={domRef}></div>
```

1. useRef 的返回值可以被useEffect等依赖忽略掉，current上值的更改也不会通知组件render
    
2. useRef 的值存在于整个组件存在周期
    
3. useRef 的值存储于 ref.current 上
    

  

  

### useCallback & useMemo

> 前情提要

react中的性能优化。在hooks诞生之前，如果组件包含内部state，我们都是基于class的形式来创建组件。当时我们也知道，react中，性能的优化点在于：

1. 调用`setState`，就会触发组件的重新渲染，无论前后的state是否不同
    
2. 父组件更新，子组件也会自动的更新
    

基于上面的两点，我们通常的解决方案是：

1. 使用`immutable`进行比较，在不相等的时候调用setState；
    
2. 在`shouldComponentUpdate`中判断前后的props和state，如果没有变化，则返回false来阻止更新。
    

在hooks出来之后，我们能够使用function的形式来创建包含内部state的组件。但是，使用function的形式，失去了上面的shouldComponentUpdate，我们无法通过判断前后状态来决定是否更新。而且，在函数组件中，react不再区分mount和update两个状态，这意味着函数组件的每一次调用都会执行其内部的所有逻辑，那么会带来较大的性能损耗。因此useMemo 和useCallback就是解决性能问题的杀手锏。

  

#### 💡使用规范

useCallback和useMemo的参数跟useEffect一致，他们之间最大的区别有是useEffect会用于处理副作用，而前两个hooks不能。

**useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数**。

**在 useCallback 内部使用了 setState ，可以考虑使用 setState callback 减少依赖**

`usecallback(()=>{},[])`

  

1. 在 useCallback 内部使用了 setState ，可以考虑使用 setState callback 减少依赖
    

```JavaScript
const useValues = () => {
  const [values, setValues] = useState({
    data: {},
    count: 0
  });

  const updateData = useCallback((nextData) => {
        setValues({
          data: nextData,
          count: values.count + 1 
       }); // 因为 callback 内部依赖了外部的 values 变量，所以必须在依赖数组中指定它
      },
      [values], 
  );

  return [values, updateData];
};
```

```JavaScript
const useValues = () => {
  const [values, setValues] = useState({});

  const updateData = useCallback((nextData) => {
    setValues((prevValues) => ({
      data: nextData,
      count: prevValues.count + 1,    
     })); // 通过 setState 回调函数获取最新的 values 状态，这时 callback 不再依赖于外部的 values 变量了，因此依赖数组中不需要指定任何值
  }, []); // 这个 callback 永远不会重新创建

  return [values, updateData];
};
```

2. 使用 ref 来保存可变变量
    

```JavaScript
const useValues = () => {
  const [values, setValues] = useState({});
  const latestValues = useRef(values);

  useEffect(() => {
    latestValues.current = values;
  });

  const [updateData] = useCallback((nextData) => {
    setValues({
      data: nextData,
      count: latestValues.current.count + 1,
    });
  }, []);

  return [values, updateData];
};
```

3. 考虑用参数传入的方式减少依赖？
    

```JavaScript
function Child(props) {
    const { id } = props;
    
    const fetchData = useCallback(() => {
        axios.get(`xxx.xxx.com/api/data?id=${id}`).then(res => {
            ...
        });
    }, [id]);

}

function Child(props) {
    const { id } = props;
    
    const fetchData = useCallback(id => {
        axios.get(`xxx.xxx.com/api/data?id=${id}`).then(res => {
            ...
        });
    }, []);
   
}

function Parent() {
    const [id, setId] = useState(1);
    return <Child id={id} />
}
```

  

## Reference

[React Hooks 深度解析](https://bytedance.feishu.cn/wiki/wikcnrtf0N4HuGnCEiD8u2b0dAb?from=from_copylink)

[useMemo与useCallback使用指南](https://blog.csdn.net/sinat_17775997/article/details/94453167?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165243632416782388061527%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=165243632416782388061527&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-94453167-null-null.142^v9^pc_search_result_control_group,157^v4^control&utm_term=usecallback&spm=1018.2226.3001.4187)

[React Hooks实践](https://bytedance.feishu.cn/docs/doccnEy1GaIGSllbRa6HKIie3kh#RTUyv7)