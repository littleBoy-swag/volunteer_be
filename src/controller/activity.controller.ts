import { Controller, Get, Post, Query } from '@midwayjs/core';

@Controller('/activity')
export class ActivityController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }

  @Post("/join")
  async join() {
    return 'join Activity Success!';
  }

  @Post("/search")
  async search() {
    return "search Activity Success!"
}

@Get("/detail")
async getActivityDetail(@Query('id') id){
    return "getActivityDetail " + id;
}

}