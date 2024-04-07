import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typegoose';
import { User } from '../entity/user';
import { ReturnModelType } from '@typegoose/typegoose';

@Provide()
export class UserService {

  @InjectEntityModel(User)
  userModel: ReturnModelType<typeof User>;

  //添加用户
  async addUser(user: User) {
    //user.id
    await this.userModel.create(user);
  }

  // 删除用户
  async deleteUser(phone) {
    return await this.userModel.deleteOne({ phone: phone }).exec();
  }

  // 修改用户信息
  async updateUser(user: User) {
    return await this.userModel.updateOne({ phone: user.phone }, user).exec();
  }

  // 获取用户信息
  async getUserInfo(phone: string) {
    const data = await this.userModel.findOne({ phone: phone }).exec();
    if (data) {
      return data;
    } else {
      return {
        code: 401,
        msg: "用户不存在",
        data: null
      }
    }

  }
}
