const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
const useRoutes = require('../router/index');


const app = new Koa();

// 处理跨域请求
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  await next()
});

app.use(bodyParser());
useRoutes(app);

module.exports = app;