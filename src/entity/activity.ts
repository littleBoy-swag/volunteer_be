import { prop } from '@typegoose/typegoose';

export class Activity {
  @prop()
  public name?: string;


  @prop({ type: () => [String] })
  public major?: string[];
}