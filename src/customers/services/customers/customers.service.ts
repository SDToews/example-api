import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer.type';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'scott.toews@gmail.com',
      name: 'scott toews',
    },
    {
      id: 2,
      email: 'scott@gmail.com',
      name: 'scott',
    },
    {
      id: 3,
      email: 'toews@gmail.com',
      name: 'toews',
    },
  ];

  getCustomers() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
