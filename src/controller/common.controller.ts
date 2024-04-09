import { Controller, Get } from '@midwayjs/core';

@Controller('/common')
export class CommonController {

  @Get('/recommend')
  async recommend() {
    return "recommend activities"
  }

  @Get('/banner')
  async banner() {
    return "banner"
  }
}
