// 写React.js必须引入React，包含JSX
import React from "react";
// ReactDOM帮我们把React组件渲染到页面上
import ReactDOM from 'react-dom/client';

import App from './02-advanced/03-受控卖座选项卡'

const root = ReactDOM.createRoot(document.getElementById('root'));

// render 方法可以渲染组件构造DOM树，插入到页面特定元素上
root.render(
    // 这是JSX- JavaScript XML 语法
    // <h1>hello world</h1>
    <App />
);