import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumberString()
  id: number;

  @IsNotEmpty()
  name: string;
}
