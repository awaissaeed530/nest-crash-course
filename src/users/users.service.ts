import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[] = [{ id: '1', name: 'Awais' }];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findById(id: string): Promise<User> {
    return this.users.find((x) => x.id === id);
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser: User = { id: new Date().toISOString(), ...userDto };
    this.users.push(newUser);
    return newUser;
  }
}
