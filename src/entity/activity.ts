import { AutoIncrementID } from '@typegoose/auto-increment';
import { plugin, prop } from '@typegoose/typegoose';

@plugin(AutoIncrementID, {})
export class Activity {
  @prop()
  public _id: number;

  @prop({ default: true })
  public active: boolean;

  @prop({ required: true })
  public topic: string;

  @prop({ default: "" })
  public description: string;

  @prop({ default: "" })
  public owner: string

  @prop({ default: [] })
  public joiner: string[]

  @prop({ default: Date.now() })
  public date: string

}