import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly _userService: UsersService) {}

  @ApiOkResponse({
    type: User,
    isArray: true,
    description: 'Array of User instance',
  })
  @Get()
  async findAll(): Promise<User[]> {
    return this._userService.findAll();
  }

  @ApiOkResponse({ type: User, description: 'User instance' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    if (await this._userService.existsById(id)) {
      return this._userService.findById(id);
    } else {
      throw new NotFoundException(`User not found with id ${id}`);
    }
  }

  @Post()
  @ApiCreatedResponse({ type: User, description: 'User instance' })
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    return this._userService.create(userDto);
  }
}
