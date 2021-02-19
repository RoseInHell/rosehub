class TestController {
  async test (ctx, next) {
    // 测试接口
    ctx.body = 'hello'
  }
}

module.exports = new TestController();