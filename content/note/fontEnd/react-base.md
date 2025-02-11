---
title: React基础
subtitle:
layout: post
date: 2022-10-01
author: heavenmei
categories:
  - Note
description:
tags:
  - Front
image:
---

# 基础篇

> [中文文档](https://security.feishu.cn/link/safety?target=https%3A%2F%2Freactjs.bootcss.com%2F%3Fspm%3Da2cl9.codeup_devops2020_goldlog_projectFiles.0.0.7cc140efSfVrlB&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)
>
> [官方文档](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fzh-hans.reactjs.org%2F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

**安装**

```bash
npm install -g create-react-app
create-react-app 项目名称
```

## JSX

类 XML 语法：唯一特殊的是可以用大括号来加入 JavaScript 表达式。遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 `{` 开头），就用 JavaScript 规则解析。

- 两种元素：DOM 元素（小写字母开头）＆ React 组件（大写字母开头）

- 返回单个标签，标签必须闭合

- **驼峰命名**，`className`代替 css 中的 class，通过`对象`包裹为标签传递内联样式

- js 表达式用一对大括号`{ }`  包起来。

- 在 { } 中不能使用语句（if 语句、for 语句等等）, 但可以使用求值表达式与函数表达式

**事件绑定**

1. JSX 事件用驼峰命名，而 HTML 是小写命名
2. JSX 事件绑定传递一个回调函数，而 HTML 是传递一个字符串
3. JSX 不能通过 return/false 阻止默认事件，需要显示调用`preventDefault()`/`stopProgation()`

**条件渲染**

使用 || ，&&，if…else，switch 等条件判断返回 jsx，返回 null，undefined 时不渲染

**列表渲染**

map、filter 遍历数组，将数组的每一项变成一个 JSX 元素。 key 帮助 React 识别哪些元素改变了，比如被添加或删除。因你应当给数组中的每一个元素赋予一个唯一的标识。

## 组件

**3 种定义方式**

- JavaScript Function: 一个 React 组件就是一个函数

  ```jsx
  function Article(){
      return({
          <div></div>
      })
  }
  ```

- ES6 class:面向对象风格

  ```jsx
  class Article extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div></div>;
    }
  }
  ```

  和 Function 组件区别

  1. 语法差异：constuctor，render 函数，bind 等等…
  2. hooks 的方法在 Class 组件中均有另一套对应的实现
  3. <u>
       function 组件每次渲染都会有独立 props/state ,而 class 组件总是会通过 this
       拿到最新的 props/state
     </u>
  4. class 创建组件，函数成员不会自动绑定 this，需要[手动绑定](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/preview_tpl3/?tpl_id=md&version=0&mount_point=explorer&updatePreviewTplSeed=1&sl=1&source=explorer#bind)

- React.createClass: 已废弃

  ```jsx
  const Article = React.createClass({
    render() {
      return <div></div>;
    },
  });
  ```

**高阶组件**

高阶函数：接受值或返回值是函数的函数

```js
const add = (x) => (y) => x + y;
add(1)(2);

//Babel 转换后
var add = function add(x) {
  return function (y) {
    return x + y;
  };
};
```

高阶组件：接受值和返回值都是组件的函数。主要用于属性代理，控制组件的属性和状态，以及渲染劫持（为组件添加同意的样式或布局）

```jsx
const Container = (WrappedComponent) =>{
    class extends React.Component{
        render(){
            let newProps = {status:'ok'}
            return <WrappedComponent {...this.props} {...newProps} />
        }    }}
```

## State

state 是组件内部的状态，React 把组件看成是一个状态机（State Machines）。

- **不要直接修改 state**。直接修改 state 可以给组件的 state 重新赋值，但无法触发组件的 re-render。
- **state 的更新可能是异步的**。
- **调用 steState，React 会把提供的对象合并到当前的 State 中（浅拷贝）**

### 渲染和提交

React 主要分两个阶段执行工作：render 和 commit，当触发更新的时候，react 先进行 render 阶段再进行 commit

阶段。在不同的阶段会触发不同的 hooks（Function 组件），或者调用不同的生命周期函数（Class 组件）

![image-20220424101251453](https://gitee.com/heavenmei/LearningNotes/raw/master/img/202204241012423.png)

)

![image-20220424110205496](https://gitee.com/heavenmei/LearningNotes/raw/master/img/202204241102296.png)

- **React 在一个渲染的事件处理程序中保持 state“固定（快照）”**

  状态变量的值在渲染中永远不会改变，即使它的事件处理程序的代码是<u>异步</u>的。可以理解成 Trigger 阶段确定了订单，就不会变更。

  ```jsx
  const [number, setNumber] = useState(0);
  <button onClick={() => {
          setNumber(number + 1);//setNumber(number + 1):number是0,下一次渲染时更改number为1
          setNumber(number + 1);//setNumber(number + 1):number是0,下一次渲染时更改number为1
          setNumber(number + 1);//setNumber(number + 1):number是0,下一次渲染时更改number为1
          //setNumber(n => n + 1); +3
      }}>+3</button>
  //其实只+1,

  <button onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
              alert(number);//0
          }, 3000);
      }}>+5</button>
  ```

- **系列状态更新排队执行**（异步）

  set 状态变量实际上就是点单状态（连续点单）。React 会等到事件处理程序中的所有代码都运行后，才会 re-render 进入下一次渲染流程。下一步 Trigger 触发。

  ![https://gitee.com/heavenmei/LearningNotes/raw/master/img/202204241019663.png](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fgitee.com%2Fheavenmei%2FLearningNotes%2Fraw%2Fmaster%2Fimg%2F202204241019663.png&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

- **state 只在 re-render 后触发更新**  在 re-render 时先计算 state 的更新系列（Trigger），再渲染 DOM 节点（Render），最后呈现（Commit）

  ![image-20220424095200807](https://gitee.com/heavenmei/LearningNotes/raw/master/img/202204240952282.png)

### 更新对象

**State 保存的状态必须只读，配合 set 改变，不能直接改变你在 React 状态下持有的对象**

> 这里仿佛和 Vue2 里面响应式原理的缺陷差不多，直接更改数组和对象是无法让数据变成响应式触发 re-render 的。
>
> [Immer](https://security.feishu.cn/link/safety?target=https%3A%2F%2Freactjs.bootcss.com%2Flearn%2Fupdating-objects-in-state%23write-concise-update-logic-with-immer&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)，它 提供的`draft`是一种特殊类型的对象，称为 Proxy。和 Vue3 的响应式改进差不多。可以用来在 React 中避免嵌套太深导致的重复代码

创建一个新对象并将其传递给状态设置函数 ，将现有数据复制到其中。

```jsx
const [person, setPerson] = useState({
  firstName: "Barbara",
  lastName: "Hepworth",
  email: "bhepworth@sculpture.com",
});
//不起作用
person.firstName = e.target.value;

//正确做法
setPerson({
  ...person, // Copy the old fields  浅拷贝
  firstName: e.target.value, // But override this one
});
//React会把提供的对象合并到当前的State中（浅拷贝）
setPerson({
  firstName: e.target.value, // But override this one
});

//嵌套用法
setPerson({
  ...person,
  artwork: {
    ...person.artwork,
    image: e.target.value,
  },
});
```

### 更新数组

避免使用：`arr[0] = 'bird'`，`push()`and `pop()`。

应该：将一个新数组传递给您的状态设置函数。

|      | 避免（改变数组）            | 喜欢（返回一个新数组）                                                                                                                                                                                                                               |
| ---- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 添加 | `push`, `unshift`           | `concat`,`[...arr]`展开语法（[示例](https://security.feishu.cn/link/safety?target=https%3A%2F%2Freactjs.bootcss.com%2Flearn%2Fupdating-arrays-in-state%23adding-to-an-array&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)） |
| 去除 | `pop`, `shift`, `splice`    | `filter`, `slice`([示例](https://security.feishu.cn/link/safety?target=https%3A%2F%2Freactjs.bootcss.com%2Flearn%2Fupdating-arrays-in-state%23removing-from-an-array&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN))         |
| 更换 | `splice`,`arr[i] = ...`赋值 | `map`（[示例](https://security.feishu.cn/link/safety?target=https%3A%2F%2Freactjs.bootcss.com%2Flearn%2Fupdating-arrays-in-state%23replacing-items-in-an-array&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)）              |
| 排序 | `reverse`, `sort`           | 首先复制数组（[示例](https://security.feishu.cn/link/safety?target=https%3A%2F%2Freactjs.bootcss.com%2Flearn%2Fupdating-arrays-in-state%23making-other-changes-to-an-array&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)）  |

```jsx
const [artists, setArtists] = useState([]);
setArtists([
  { id: nextId++, name: name },
  ...artists, // Put old items at the end
]);

setArtists(artists.filter((a) => a.id !== artist.id));
```

==注意==

即使复制一个数组，也不能直接改变其中(浅拷贝)，可以使用`map`没有突变的更新版本替换旧项目

```js
//哒咩
const myNextList = [...myList];
const artwork = myNextList.find(a => a.id === artworkId);
artwork.seen = nextSeen; // Problem: mutates an existing item
setMyList(myNextList);
//应该
setMyList(myList.map(artwork => {
  if (artwork.id === artworkId) {
    // Create a *new* object with changes
    return { ...artwork, seen: nextSeen };
  } else {
    // No changes
    return artwork;
  }
});
```

## Hook

React 16.8 的新增特性。Hooks 是一系列特殊的函数，可以让你“钩入” React 的特性，即在函数组件中也可以使用 state 及其他 React 特性，不必定义 Class 组件。例如 useState、useContext

### Hook 规则

1. 只在最顶层使用 Hook

   **不要在循环，条件或嵌套函数中调用 Hook，**  确保总是在你的 React 函数的最顶层以及任何 return 之前调用他们。遵守这条规则，就能确保 hooks 在每一次渲染中都按照同样的顺序被调用，这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hooks 状态的正确

2. 只在 React 函数中调用 Hook

   **不要在普通的 JavaScript 函数中调用 Hook。**你可以：

   - ✅ 在 React 的函数组件中调用 Hook
   - ✅ 在自定义 Hook 中调用其他 Hook

### useReducer

减速器是处理状态的另一种方式。随着该组件的增长，散布在其中的状态逻辑数量也在增长。为了降低这种复杂性并将所有逻辑保存在一个易于访问的位置，您可以将该状态逻辑移动到组件外部的单个函数中

您可以通过三个步骤从迁移`useState`到：`useReducer`

1. 从设置状态转移到调度动作。传递给的对象

   ```js
   function handleDeleteTask(taskId) {
     dispatch(
       // "action" object:
       {
         type: "deleted",
         id: taskId,
       }
     );
   }
   ```

2. 写一个 reducer 函数。

   ```js
   function tasksReducer(tasks, action) {
     //(当前状态, 对象声明)
     switch (action.type) {
       case "added": {
         return [
           ...tasks,
           {
             //返回下一个状态
             id: action.id,
             text: action.text,
             done: false,
           },
         ];
       }
       case "deleted": {
         return tasks.filter((t) => t.id !== action.id);
       }
       default: {
         throw Error("Unknown action: " + action.type);
       }
     }
   }
   ```

3. 使用组件中的减速器。

   ```js
   import { useReducer } from "react";
   //替换useState
   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks); //(减速器功能、初始状态)
   //返回有状态的值、分派函数（将用户操作“分派”到reducer）
   ```

> 规定

- 按照惯例，通常给 dispatch 一个 type 描述发生了什么的字符串，并在其他字段中传递任何附加信息。
- 约定在 reducer 中使用 switch 代替 if/else

**[useReducer+Context](https://security.feishu.cn/link/safety?target=https%3A%2F%2Freactjs.bootcss.com%2Flearn%2Fscaling-up-with-reducer-and-context&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)**：实现深层传递，不局限于父子显示传递

### useEffect

用来进行副作用的处理，如获取服务端数据、原生事件绑定等。它跟 class 组件中的  `componentDidMount`、`componentDidUpdate`  和  `componentWillUnmount`  具有相同的用途，只不过被合并成了一个 API。

与  `componentDidMount`  或  `componentDidUpdate`  不同，使用  `useEffect`  调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。大多数情况下，effect **不需要同步地执行**。

当你调用  `useEffect`  时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。默认情况下，它在第一次渲染之后和每次更新之后都会执行.不用再去考虑“挂载”还是“更新”.

- 通过函数的返回值清理副作用， React 会在组件卸载的时候执行清除操作。

```js
useEffect(() => {
  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
});
```

- 利用第二个参数，控制 useEffect 入参函数的执行，当依赖变化的时候 useEffect 入参函数才会执行，

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新
```

### useRef

> 用于缓存数据

ref 的改变不会重新触发 render，保存不用于渲染的值。你不会经常需要它们。

`useRef`  返回一个可变的 ref 对象，其  `.current`  属性被初始化为传入的参数。返回的 ref 对象在组件的整个生命周期内持续存在。

```js
//返回
{
  current: 0; // The value you passed to useRef
}
//Example
//组件不会随着每个增量重新渲染。与 state 一样，refs 在重新渲染之间由 React 保留。
//但是，设置state会重新渲染组件。更改redf不会！
import { useRef } from "react";

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  return <button onClick={handleClick}>Click me! </button>;
}
```

**手写 useRef**

```js
function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;
}
```

**refs 和 state 的区别**

| redfs                                     | state                                                                                                                                                                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 返回`{ current: initialValue }`             | 返回[value, setValue]                                                                                                                                                                                                                                   |
| 更改时不会触发重新渲染。                  | 更改时触发重新渲染。                                                                                                                                                                                                                                    |
| 可变的—可在渲染过程之外修改 current       | “不可变”—您必须使用 setState 以排队重新渲染。                                                                                                                                                                                                           |
| 您不应该在渲染期间读取（或写入）current。 | 您可以随时读取状态。但是，每个渲染都有自己的状态[快照](https://security.feishu.cn/link/safety?target=https%3A%2F%2Freactjs.bootcss.com%2Flearn%2Fstate-as-a-snapshot&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)，不会改变。 |

> 用于获取 DOM 元素

由 React 管理的 DOM 元素——例如，聚焦一个节点、滚动到它，或者测量它的大小和位置。

```js
import { useRef } from 'react';

export default function Form() {
   //声明一个ref
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      //React将 <input>的 DOM 节点放入inputRef.current.
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
```

使用 forwardRef 实现 转发 dom ref 到子组件。

默认情况下 React 不允许组件访问其他组件的 DOM 节点，连自己的孩子都不行。用`forwardRef`让一个组件可以指定它把它的引用“转发”给它的一个孩子

```js
import { forwardRef, useRef } from "react";

//forwardRef声明，这使它选择inputRef从上面接收ref作为第二个参数，该参数是在props之后声明的。
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      //告诉 React 将对应的 DOM 节点放入inputRef.current.
      但是，由MyInput组件决定是否选择加入 - 默认情况下，它不会。
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

### useMemo

数据缓存，依赖变化时，工厂函数会重新执行

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### useCallback

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

数据缓存，依赖变化时，缓存的函数会更新。

把内联回调函数及依赖项数组作为参数传入  `useCallback`，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如  `shouldComponentUpdate`）的子组件时，它将非常有用。

`useCallback(fn, deps)`  相当于  `useMemo(() => fn, deps)`。

### 自定义 Hooks

通过原生 hooks 的组装，实现逻辑的抽象复用，自定义 hooks 也统一用 useXXX 命名

### flushSync 同步刷新

在 React 中，状态更新是异步的，导致一个问题，数据还未更新就继续执行。

要解决这个问题，你可以强制 React 同步更新（“刷新”）DOM。

```js
import { flushSync } from "react-dom";

flushSync(() => {
  setTodos([...todos, newTodo]);
});
listRef.current.lastChild.scrollIntoView();
```

## 组件通信

### Props（父子）

父组件使用 props 向子组件传递，子组件到父组件利用回调函数 当内容嵌套在 JSX 标记中时，父组件将其名为`children`

父组件

```jsx
import React, { Component } from "react";
import Sub from "./SubComponent.js";
import "./App.css";

export default class App extends Component {
  callback(msg) {
    console.log(msg);
  }

  render() {
    return (
      <div>
        <Sub title="今年过节不收礼" callback={this.callback.bind(this)} />
      </div>
    );
  }
}
```

子组件

```jsx
import React from "react";
//可解构({title,callback})=>{}
const Sub = (props) => {
  const cb = (msg) => {
    return () => {
      props.callback(msg);
    };
  };
  return (
    <div>
      <h1>{props.title} </h1>
      <button onClick={cb("我们通信把")}>点击我</button>
    </div>
  );
};

export default Sub;
```

> 为什么要用 bind()?


*如果传递一个函数名给一个变量，之后通过函数名()的方式进行调用，在方法内部如果使用this 则 this 的指向会丢失。*

如果使用 node 环境执行 js 文件则输出 node 相关信息，如嵌入到 html 中则 this
指向 window 对象

```js
const test = {
  name: "jack",
  getJack: function () {
    console.log(this.name);
  },
};
const func = test.getJack;
func();
//undefined
```

React 中的 bind 同上方原理一致,在 JSX 中传递的事件不是一个字符串，而是一个函数（如:onClick={this.handleClick}），此时 onClick 即是中间变量，所以处理函数中的 this 指向会丢失。

> react 组件内点击事件的 this 的 3 种指向方法

1. 调用函数时**bind**(this)，，this 指向当前实例化对象。 `onClick={this.handleClick1.bind( this )}`
2. 声明函数时使用**箭头函数**，并在调用时直接使用 this.变量名即可。 `handleClick3 =()=>{console.log( this )}`
3. 通过在构造函数**constructor**内使用 bind 对函数内的 this 重定向  `this.handleClick2 = this.handleClick2.bind(this)`  不建议在 render()中 bind，因为它会在每次 render()方法执行时绑定类方法，肯定对于性能有影响。而直接在 constructor 中 bind, 则 bind 只会在组件实例化初时运行一次。

### useContext（祖先后代）

context 是组件树上某棵子树的全局变量。一颗树上的所有组件可以获取同样的状态。

- 当子组件获取上下文时，从自身最近的 Provider 中读取，没有则读取默认值
- Provider 接收一个 value 属性，并将该属性传递给自己的 Comsumer 组件
- 多个 Provider 可以嵌套使用，内层 value 覆盖外层

```jsx
import {useState, useContext, createContext} from 'react';
//1、创建并导出它
const  ThemeContext = createContext('');

function Child(props){
    //2、子组件声明使用
    const theme = useContext(ThemeContext);
    return (
        <span>{theme}</span>
    )
}

function ThemeShow(props){
    const { theme } = props;
    return (
        <div>
            theme is: <Child theme ={theme}/>
        </div>
    )}export defalut function App(){    const [theme,setTheme] = useState('blue');    return(        <div>
            <button onClick={()=> setTheme('red')}> changeTheme</button>
            //3、父组件包裹提供            <ThemeContext.Provider value={theme}>
                <ThemeShow />
            </ThemeContext.Provider>
        </div>

    )}
```

> Class 形式

父组件 App.js

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";
import Sub from "./Sub";
import "./App.css";

export default class App extends Component {
  // 父组件声明自己支持 context
  static childContextTypes = {
    color: PropTypes.string, //数据类型
    callback: PropTypes.func,
  };

  // 父组件提供一个函数，用来返回相应的 context 对象
  getChildContext() {
    return {
      color: "red",
      callback: this.callback.bind(this),
    };
  }

  callback(msg) {
    console.log(msg);
  }

  render() {
    return (
      <div>
        <Sub></Sub>
      </div>
    );
  }
}
```

子组件 Sub.js

```jsx
import React from "react";
import SubSub from "./SubSub";

const Sub = (props) => {
  return (
    <div>
      <SubSub />
    </div>
  );
};

export default Sub;
```

子组件的子组件 SubSub.js

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SubSub extends Component {
  // 子组件声明自己需要使用 context
  static contextTypes = {
    color: PropTypes.string,
    callback: PropTypes.func,
  };
  render() {
    const style = { color: this.context.color };
    const cb = (msg) => {
      return () => {
        this.context.callback(msg);
      };
    };
    return (
      <div style={style}>
        SUBSUB <button onClick={cb("我胡汉三又回来了！")}>点击我</button>
      </div>
    );
  }
}
```

### 事件总线 Bus（兄弟）

需要使用一个 events 包： `npm install events --save`  在 src 下新建一个 utils 文件夹，新增文件 events.js: 向外提供一个事件对象：

```js
import { EventEmitter } from "events";
export default new EventEmitter();
```

App.js：

```js
import React, { Component } from "react";

import Foo from "./Foo";
import Boo from "./Boo";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Foo />
        <Boo />
      </div>
    );
  }
}
```

Foo.js:

```js
import React, { Component } from "react";
import emitter from "./ev";

export default class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: null,
    };
  }
  componentDidMount() {
    // 声明一个自定义事件
    // 在组件装载完成以后
    this.eventEmitter = emitter.addListener("callMe", (msg) => {
      this.setState({
        msg,
      });
    });
  }
  // 组件销毁前移除事件监听
  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter);
  }
  render() {
    return <div>{this.state.msg} 我是非嵌套 1 号 </div>;
  }
}
```

Boo.js:

```js
import React, { Component } from "react";
import emitter from "./ev";

export default class Boo extends Component {
  render() {
    const cb = (msg) => {
      return () => {
        // 触发自定义事件
        emitter.emit("callMe", "Hello");
      };
    };
    return (
      <div>
        我是非嵌套 2 号 <button onClick={cb("blue")}>点击我</button>
      </div>
    );
  }
}
```

### Redux（[全局](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/preview_tpl3/?tpl_id=md&version=0&mount_point=explorer&updatePreviewTplSeed=1&sl=1&source=explorer#redux)）

## 生命周期

你可以使用此[生命周期图谱](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fprojects.wojtekmaj.pl%2Freact-lifecycle-methods-diagram%2F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)作为速查表

**Function 组件**

![https://gitee.com/heavenmei/LearningNotes/raw/master/img/202204241521250.png](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fgitee.com%2Fheavenmei%2FLearningNotes%2Fraw%2Fmaster%2Fimg%2F202204241521250.png&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

**Class 组件**

![image-20220424152418167](https://gitee.com/heavenmei/LearningNotes/raw/master/img/202204241524903.png)

**生命周期对应**


# 进阶篇

## 虚拟 DOM

> 浏览器渲染过程

![https://img.alicdn.com/tps/TB1eabOLpXXXXX3XFXXXXXXXXXX-1093-167.jpg_720x720.jpg#alt=](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fimg.alicdn.com%2Ftps%2FTB1eabOLpXXXXX3XFXXXXXXXXXX-1093-167.jpg_720x720.jpg%23alt%3D&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

> 为什么要引入虚拟 DOM？

- 单页面应用中，涉及大量 DOM 操作，引起多次计算，每次 DOM 操作都会重新构建渲染树、布局、渲染流程，造成巨大性能损耗

- DOM 元素很庞大，相较之下 JavaScript 对象处理起来更快、更简单。DOM 对象可以很容易用 Javascript 对象来表示。

- **状态树-->虚拟 DOM 树-->Diff 比较差异-->`ReactDOM.render()`-->DOM 树**

  ```js
  <p id="text">hello<span class="textRed">world</span>
  var element={
      tagName:'p',
      props:{
          id:'text'
      },
      children:[
          "hello",
          {
              tagName:'span',
              props:{class:'textRed'},
              childeren:["World"]
          }
      ]
  }
  ```

## Diff 算法

传统的 Diff 算法复杂度$O(n^3)$，通过两个假设优化到$O(n)$。 [参考文章：react diff 算法详解](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fblog.csdn.net%2Fqdmoment%2Farticle%2Fdetails%2F88798916%3Fops_request_misc%3D%25257B%252522request%25255Fid%252522%25253A%252522165084998416782425175606%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fall.%252522%25257D%26request_id%3D165084998416782425175606%26biz_id%3D0%26utm_medium%3Ddistribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-88798916.142%255Ev9%255Epc_search_result_cache%2C157%255Ev4%255Econtrol%26utm_term%3Dreact%2Bdiff%26spm%3D1018.2226.3001.4187&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

1. 两个不同类型的元素会产生不同的树
2. 对于同一层级的一组子元素，他们可以通过唯一 ID 进行区分

**tree diff**：同层比较，如果节点不存在直接删除创建。这样只需要对 DOM 树进行一次遍历，就可以完成整个树的比较。复杂度变为*O(n)*。因此不建议进行 DOM 节点跨层级的操作

![image-20220425092757991](https://gitee.com/heavenmei/LearningNotes/raw/master/img/202204250927916.png)

**Component diff**：同一类型的组件继续 tree diff 比较，不同类型的组件直接删除重建。

![img](https://gitee.com/heavenmei/LearningNotes/raw/master/img/202204250929100.png)

**element diff**：key 标识，判断是否是同一组件

- 插入：新的 component 类型不在老集合里
- 移动：在老集合有新 component 类型，且 element 是可更新的类型，可以复用以前的 DOM 节点。
- 删除：老 component 类型，在新集合里也有，但对应的 element 不同则不能直接复用和更新；或者老 component 不在新集合里的。

当没有 key 时 React 会逐个对节点进行更新，最后插入节点，效率低下。因此提出优化策略，添加唯一标识 key 进行区分，可以达到移动效果。

**Tips：不要使用 index 作为 key。和没有 key 一样的效果**

## Fiber 机制

React16 以前采用 Diff 算法，对 virtural dom 的更新和渲染是同步的。如果组件层级比较深，相应的堆栈也会很深，<u>长时间占用浏览器主线程</u>，一些类似用户输入、鼠标滚动等操作得不到响应。

React16 采用 Fiber Reconciler，用分片的方式，<u>彻底解决主线程长时间占用问题的机制</u>。就是把一个任务分成很多小片，当分配给这个小片的时间用尽的时候，就检查任务列表中有没有新的、优先级更高的任务，有就做这个新任务，没有就继续做原来的任务。这种方式被叫做异步渲染(Async Rendering)。

> Fiber 树

每一个 Fiber 对于一个虚拟节点，在虚拟 DOM 树上构建了 Fiber 树，采用**链表**的机构存储。每个节点包括以下内容：

- stateNode：状态节点
- return：该节点的父级 Fiber 节点引用
- child：该节点的第一个子 Fiber 节点引用
- sibling：当前层级的下一个兄弟 Fiber 节点

> 两个阶段

Reconciliation 阶段：找出要做的更新工作，就是一个计算阶段，计算结果可以被缓存，也就可以被打断；该阶段包含的生命周期函数有： `componentWillMount` `componentWillReceiveProps` `componentWillUpdate` `shouldComponentUpdate`该阶段任务随时可能被中断或重来，建议不要在这几个生命周期做副作用。

Commmit 阶段：需要提交所有更新并渲染，为了防止页面抖动，被设置为不能被打断。

PS：副作用：指函数除了返回一个值之外，造成的其他影响，如修改外部变量、抛出异常、I/O 操作等，这里的副作用指对 Fiber 节点进行插入、更新、删除。

> Fiber 机制无法解决的问题

1. 生命周期内大量的计算任务：由于 Reac Fiber 是以 Fiber 节点作为最小单元，无法在生命周期内对任务进行差分，这些计算任务在执行中途不能被中断
2. 大量真实 DOM 操作：这部分任务在 Commit 阶段被同步执行，无法中断。过大的 DOM 操作压力只能由浏览器承担。

**总的来说**，React Fiber 通过将任务切片，以及采用合适的任务调度机制，解决了高优先级任务被阻塞的问题，使应用展示更加流畅。

## Redux

<span id="redux"></span>

### Flux

核心思想：利用单项数据流和逻辑单向流来应对 MVC 架构中出现的状态混乱的问题

![img](https://gitee.com/heavenmei/LearningNotes/raw/master/img/202205051357774.png)

流程：

1. 在 View 创建 Action
2. View 发出用户的 Action
3. Dispatcher 收到 Action，要求 Store 进行相应的更新
4. Store 更新后，通知 View 更新
5. View 收到通知，更新页面

> [阮一峰 Flux 教程](https://security.feishu.cn/link/safety?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2016%2F01%2Fflux.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

### Redux 介绍

三大特性：

1. 单一数据源：全局变量 store

2. state 只读：唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

3. 使用纯函数修改：一个函数只有依赖于它的参数，相同输入得到相同输出

### Action

**action 是 store 数据的唯一来源。一般来说你会通过  `store.dispatch()`将 action 传到 store**。Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的  `type`  字段来表示将要执行的动作。多数情况下，`type`  会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。

**说人话：**

action 就是一个描述“发生了什么”的普通对象。可以把 action 理解成新闻的摘要。如 “玛丽喜欢 42 号文章。” 或者 “任务列表里添加了'学习 Redux 文档'”。

action 创建函数：就返回一个 action 对象

```js
function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}
//Redux 中只需把 action 创建函数的结果传给 dispatch() 方法即可发起一次 dispatch 过程。
dispatch(addTodo(text));
//或者创建一个 被绑定的 action 创建函数 来自动 dispatch：
const boundAddTodo = (text) => dispatch(addTodo(text));
boundAddTodo(text);
```

### Reducer

**Reducers**  指定了应用状态的变化如何响应  [actions](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.redux.org.cn%2Fdocs%2Fbasics%2FActions.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)  并发送到 store 的，记住 actions 只是描述了*有事情发生了*这一事实，并没有描述应用如何更新 state。

reducer 接收先前的 state 和 action，并返回新的 state

```js
function visibilityFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}
```

每个 reducer 只负责管理全局 state 中它负责的一部分。每个 reducer 的  `state`  参数都不同，分别对应它管理的那部分 state 数据。最后再由`combineReducers`合并

```js
const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
```

### Store

- `getState()`
- `dispatch(action)`
- `subscribe(listener)`:用于注册监听器，返回一个注销监听器的函数

```js
import { createStore } from "redux";
import todoApp from "./reducers";
let store = createStore(todoApp);
let store = createStore(todoApp, window.STATE_FROM_SERVER);
```

[`createStore()`](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.redux.org.cn%2Fdocs%2Fapi%2FcreateStore.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)  的第二个参数是可选的, 用于设置 state 初始状态。这对开发同构应用时非常有用，服务器端 redux 应用的 state 结构可以与客户端保持一致, 那么客户端可以将从网络接收到的服务端 state 直接用于本地数据初始化。

### Middleware

```js
//方法一
function logger(store) {
  // 这里的 next 必须指向前一个 middleware 返回的函数：
  let next = store.dispatch;

  return function dispatchAndLog(action) {
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
  };
}

//方法二
function logger(store) {
  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndLog(action) {
      console.log("dispatching", action);
      let result = next(action);
      console.log("next state", store.getState());
      return result;
    };
  };
}

//方法二——柯西里化
const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

//手写 合并
function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice();
  middlewares.reverse();

  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => (dispatch = middleware(store)(dispatch)));

  return Object.assign({}, store, { dispatch });
}

// Redux 中的用法
//applyMiddleware与上述实现略有不同
import { createStore, combineReducers, applyMiddleware } from "redux";

let todoApp = combineReducers(reducers);
let store = createStore(
  todoApp,
  // applyMiddleware() 告诉 createStore() 如何处理中间件
  applyMiddleware(logger, crashReporter)
);
```

### React-redux

store 的三大功能：dispatch，subscribe，getState 都不需要手动来写了。react-redux 帮我们做了这些，同时它提供了两个好基友 Provider 和 connect。

Redux 和 React 之间没有关系。Redux 支持 React、Angular、Ember、jQuery 甚至纯 JavaScript。

```bash
npm install --save react-redux redux
npm install redux-devtools-extension
//调试器
```

**Provider**：让所有容器组件都可以访问 store，而不必显示地传递它。只需要在渲染根组件时使用即可。

```js
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

let store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

**connect**：（高阶组件）连接 React 组件和 Redux Store，当前组件可以通过 prop 获取应用中的 state 和 Action。四个参数

- `mapStateToProps()`:指定如何把当前 Redux store state 映射到展示组件的 props 中
- `mapDispatchToProps()`：接收 dispatch()方法并返回期望注入到展示组件的 props 中的回调方法。

```js
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    case "SHOW_ALL":
    default:
      return todos;
  }
};

//state 是store的state
//返回一个新的对象，这个对象会作为props的一部分传入ui组件
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

import { connect } from "react-redux";

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList); //注入的组件

export default VisibleTodoList;
```

### 总结

**总体流程**

1. 首先调用`store.dispatch(action)`，同时用`getState`获取当前的状态树 state 并注册`subscribe(listener)`监听 state 变化
2. 再调用`combineReducers`并将获取的 state 和 action 传入。combineReducers 会将传入的 state 和 action 传给所有 reducer，并根据 action 的 type 返回新的 state，触发 state 树的更新，我们调用 subscribe 监听到 state 发生变化后用 getState 获取新的 state 数据。

> 只使用 Redux 流程：component --> dispatch(action) --> reducer --> subscribe --> getState --> component

**react-redux 流程**

1. Provider 组件接受 redux 的 store 作为 props，然后通过 context 往下传。
2. connect 函数收到 Provider 传出的 store，然后接受三个参数 mapStateToProps，mapDispatchToProps 和组件，并将 state 和 actionCreator 以 props 传入组件，这时组件就可以调用 actionCreator 函数来触发 reducer 函数返回新的 state，connect 监听到 state 变化调用 setState 更新组件并将新的 state 传入组件。

> react-redux 流程：component --> actionCreator(data) --> reducer --> component
