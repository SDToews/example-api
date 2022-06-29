import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from '../../services/customers/customers.service';
@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get('')
  getAllCustomers() {
    return this.customerService.getCustomers();
  }

  @Get(':id')
  getCustomer(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.findCustomerById(id);

    if (customer) return customer;
    else throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customerService.createCustomer(createCustomerDto);
  }
}
