import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities';
import { UsersService } from 'src/users/services';
import { LoginResponseDto, SignupRequestDto } from '../dtos';
import { LoginRequestDto } from '../dtos/login-request.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userService.findByUsername(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(dto: LoginRequestDto): Promise<LoginResponseDto> {
    const user = await this.userService.findByUsername(dto.username);
    return this.generateAccessToken(user.username, user.id);
  }

  async signup(dto: SignupRequestDto): Promise<void> {
    try {
      await this.userService.create(dto);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  private generateAccessToken(
    username: string,
    userId: string,
  ): LoginResponseDto {
    const payload = { username, userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
