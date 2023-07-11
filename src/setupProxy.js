const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://codit-json.s3.us-east-1.amazonaws.com/data.json?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCWV1LXdlc3QtMiJGMEQCICjw5WFwkOqvqdXDPKLd2Pqwb6IcwLu5exU2A30llSv2AiAncIiatUUDTWyh1wcGRbyfBtKN%2FA59%2BpryOXuuZ87GbSrxAgil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDUyOTE5MDYzNTA2MSIMBKgCq4HKsafLhmG2KsUCmiw226JSEPT6DEiGy8ek2JAwYrNw9aWtVEb6rrbJcjLCJx5v2ZIOtsLZEbboTjfuCI0o2cZvL%2Fr2qhijs5ig1nvscX9o%2BVw799miympVOCefvkMRSlrXSsBmCk3NNlLw5qWlOtzUpDMDmAmShGpv17c6YbtpwfExqffjMQgoQ95boOvbfjo%2FZ7AxLSzp2v4zNi0warE8PUU8mrwjR4M3Jg9XCrDI%2Fl0WxBsH0WP1bvjTR%2BhAPaeqfd0Z8H42p%2F3UOZXPN%2BxPOa02jcvRIAO3Hv%2B9k1x0GriazsRMx3UeyNQmz5RyytQfPvPwLmc4nedroykfFOcb6PgRrdvLudKUK7qnJSrYqWXYC%2BByV1dLq4AWyNOxYdt85%2BeI4uYUEafuIK%2BsxrAGy6MGpPuzplHukiIFIYxOlY5PwkzfvQSBIz2mevOgCTDD6q%2BlBjq0AmzZXy%2FzCwOdwGj51CVshTyquL54irnBR583YgI%2BcosolvyN25ysEBw7hjUmBlH1GQ0xYnBNRQFRceotdXOofmFTCwWyCoSud0tHd4GqtdRl9%2FodY7c12r1bSzN13k1wwrK6YLMzt%2FV0xLhA2LwHKHMvmJspO%2FJuOjErrPJCqaJQHF7BHnWSkK4QsQ83H5QQrC7TWOLasW6NJA1Z%2ByYOq7y%2BAkHB%2BOvFnqxdRFstN3h%2Byv0SRLoIiKwSKpRm3v%2FdPrzQ%2B%2FItOd8mQUosJvDgfoS2zBjObSM8di8pqIt9CDqPqptIkjYVZmJuAfjCV%2FXTX%2FVdYLlcn03vRjQH%2BURbssU4mQd%2F2VI68l50L7m484n18idQ49I7RAtVBEW8ksRq2a99VH9AtsA3j8Sf45Rc1yD7fHtY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230710T123850Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXWNRYIY25PWOAXNM%2F20230710%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=37fc086d7a29b3de1c273ea89c232028f3f5fca29cabc4eeb9e779f9f263bf59',
      changeOrigin: true,
    })
  );
};
