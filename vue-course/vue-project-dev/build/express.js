const express = require('express');
const webpack = require('webpack');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);
app.use((req,res,next) => 
{
    console.log(new Date());
    //结束
    next();
});
//内置中间件  托管静态文件--可以直接http://localhost:3001/css/head.css访问到css
app.use(express.static("public"));
app.get('/',(request,response) => {
    response.send('hello express!');
});
app.get('/news',(request,response) => {
    response.send('news');
});
app.listen(3000, function () {
   console.log('Example app listening on port 3000!\n');
});