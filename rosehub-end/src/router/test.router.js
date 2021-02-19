const Router = require('koa-router');

const { test } = require('../controller/test.controller');

const testRouter = new Router();

testRouter.get('/test', test);

module.exports = testRouter;