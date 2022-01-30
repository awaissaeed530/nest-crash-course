import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly _userService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this._userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    return this._userService.findById(id);
  }

  @Post()
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    return this._userService.create(userDto);
  }
}
