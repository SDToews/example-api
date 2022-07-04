import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {
    console.log('hello there from middleware');
    next();
  }
}
