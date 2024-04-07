import { Middleware, IMiddleware } from '@midwayjs/core';
import { NextFunction, Context } from '@midwayjs/koa';

@Middleware()
export class FormatMiddleWare implements IMiddleware<Context, NextFunction>{

    resolve() {
        return async (ctx: Context, next: NextFunction) => {
            const result = await next();
            if (result && result.code && result.msg) {
                return result;
            } else {
                return {
                    code: 2000,
                    msg: 'success',
                    data: result
                }
            }
        }
    }

}