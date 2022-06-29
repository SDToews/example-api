import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Req,
  Res,
} from '@nestjs/common';
import { CustomersService } from '../../services/customers/customers.service';
import { Request, Response } from 'express';
@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get(':id')
  getCustomer(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.findCustomerById(id);

    if (customer) return customer;
    else throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }
}
