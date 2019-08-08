## webpack get started

>官网入门指南-起步：https://www.webpackjs.com/guides/getting-started/
----

### 1. 安装webpack
``` ps1
npm init -y
npm install --save-dev webpack webpack-cli 
```

### 安装lodash
``` ps1
npm install --save-dev lodash
```

### 2. index.js 别写helloworld代码

我们用import 方式引用组件 webpack 会管理我们的依赖项, 编译后输出main.js 文件, 只需要引用一个js就可以引用多组件
``` js
import _ from 'lodash';

function component() {
    var element= document.createElement('div');
    // Lodash，现在由此脚本导入
    element.innerHTML= _.join(['Hello','webpack'],' ');
    element.classList.add('hello');
    return element;
}
var div=component();
document.body.appendChild(div);
```
### 3. 编译
``` ps1
npx webpack
```
### 4. 找到index.html 打开