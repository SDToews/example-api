import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'scott',
      password: 'pass',
    },
    {
      id: 2,
      username: 'st',
      password: 'pass1',
    },
    {
      id: 3,
      username: 'darin',
      password: 'pass2',
    },
    {
      id: 4,
      username: 'scotty',
      password: 'pass3',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users
      .map((user) => plainToClass(SerializedUser, user))
      .find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
