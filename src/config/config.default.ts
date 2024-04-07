import { MidwayConfig } from '@midwayjs/core';
import { User } from '../entity/user';
import { Activity } from '../entity/activity';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1712397475512_6198',
  koa: {
    port: 7001,
  },
  mongoose:{
    dataSource:{
      default:{
        uri: 'mongodb://127.0.0.1:27017/volunteer',
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          user: 'fpan',
          pass: 'fpan_volunteer'
        },
        entities: [ User, Activity ]
      }
    }
  }
} as MidwayConfig;
