import { Body, Controller, Get, Inject, Post, Query } from "@midwayjs/core";
import { UserService } from "../service/user.service";
import { User } from "../entity/user";

@Controller('/user')
export class UserController {

    @Inject()
    userService: UserService

    @Post('/add_user')
    async addUser(@Body() user: User) {
        return await this.userService.addUser(user);
    }

    @Post('/delete_user')
    async deleteUser(@Body('phone') phone) {
        return await this.userService.deleteUser(phone);
    }

    @Post('/update_user')
    async updateUser(@Body() user: User) {
        return await this.userService.updateUser(user);
    }

    @Get('/user_info')
    async getUser(@Query('phone') phone) {
        return await this.userService.getUserInfo(phone);
    }

    @Get('/my_activity')
    async getMyActivities(@Query('id') id ) {
        return "get my activity"
    }

    @Get('/my_message')
    async getMyMessage(@Query('id') id) {
        return "get my message"
    }

}