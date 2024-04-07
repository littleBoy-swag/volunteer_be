import { AutoIncrementID } from '@typegoose/auto-increment';
import { plugin, prop } from '@typegoose/typegoose';

@plugin(AutoIncrementID, {})
export class User {

  @prop()
  public _id: number;

  @prop()
  public name?: string;

  @prop()
  public gender?: number;

  @prop({ match: /^\d{11}$/, unique: true })
  public phone: string

  @prop({ default: "" })
  public avatar?: string;

  @prop({ type: () => [String] })
  public jobs?: string[];

  @prop({ default: 0 })
  public level: number
}