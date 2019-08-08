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