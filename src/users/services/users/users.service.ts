import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'scott',
      password: 'pass',
    },
    {
      username: 'st',
      password: 'pass1',
    },
    {
      username: 'darin',
      password: 'pass2',
    },
    {
      username: 'scotty',
      password: 'pass3',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserbyUsername(username: string) {
    return this.users
      .map((user) => plainToClass(SerializedUser, user))
      .find((user) => user.username === username);
  }
}
