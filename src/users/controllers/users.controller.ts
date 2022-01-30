import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/gaurds';
import { CreateUserDto } from '../dtos';
import { User } from '../entities';
import { UsersService } from '../services';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly _userService: UsersService) {}

  @ApiOkResponse({
    type: User,
    isArray: true,
    description: 'Array of User instance',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<User[]> {
    return this._userService.findAll();
  }

  @ApiOkResponse({ type: User, description: 'User instance' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    if (await this._userService.existsById(id)) {
      return this._userService.findById(id);
    } else {
      throw new NotFoundException(`User not found with id ${id}`);
    }
  }

  @ApiCreatedResponse({ type: User, description: 'User instance' })
  @Post()
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    return this._userService.create(userDto);
  }
}
