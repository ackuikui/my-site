# react
官方文档
https://zh-hans.react.dev/learn  


vscode 安装语法提示插件 ES7+ React/Redux/React-Native snippets  
rfc = react function component  

## cli脚手架
https://create-react-app.dev/  

```sh
npx create-react-app my-app
cd my-app
npm start
```

## class写法  
```jsx
import React, { Component } from 'react';  
  
class ClassCode extends Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
    };  
  }  
  
  componentDidMount() {  
  }  
  
  render() {  
    return (  
      <div style={{color: 'red'}}>  
        class写法 + 生命周期
      </div>  
    );  
  }  
}  
  
export default ClassCode;
```


## 函数式写法  
```jsx
import React, { useState } from "react";

export default function FunCode() {
  const [text, setText] = useState("hello function");
  return <div style={{ color: "red" }}>{text}</div>;
}
```

## prop 
```jsx
import React, { useState } from "react";

export default function PropCode(props) {
  let nameStr = props.nameStr;
  return (
    <>
      props 和 props.fn
      <div style={{ color: "red" }}>{nameStr}</div>
      <button onClick={props.onClickFn}>响应外层事件</button>
    </>
  );
}
```

event
```jsx
function clickFn() {
    alert("hello");
}

<PropCode nameStr="nameStr hello" onClickFn={clickFn}></PropCode>
```


## css样式
```css
.text1{
    color: red;
}
```
```js
import './css.css'

<p className="text1">text1</p>
<p style={{color: 'green', backgroundColor: "yellow"}}>text2</p>
```

## hook
- useState
```js
const [index, setIndex] = useState(0);  
```

- useRef
```js
const inputRef = useRef(null);  
inputRef.current.focus()   

<input ref={inputRef}/>  
```
useImperativeHandle() ref暴露方法  

- useEffect
```jsx
useEffect(() => factory, deps)
```

- useMemo

- useCallback

- 自定义hook

## 状态提升
prop上移到父组件

## 纯函数
只有prop引起变化, 无状态state

## react源码
fiber