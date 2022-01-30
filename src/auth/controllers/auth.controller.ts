import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { LoginResponseDto, SignupRequestDto } from '../dtos';
import { LoginRequestDto } from '../dtos/login-request.dto';
import { LocalAuthGuard } from '../gaurds';
import { AuthService } from '../services';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOkResponse({ type: LoginResponseDto, description: 'Login Success' })
  @ApiForbiddenResponse({ description: 'username or password incorrect' })
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: LoginRequestDto): Promise<LoginResponseDto> {
    return this.authService.login(dto);
  }

  @ApiNoContentResponse({ description: 'User signup success' })
  @HttpCode(204)
  @Post('signup')
  async signup(@Body() dto: SignupRequestDto): Promise<void> {
    return this.authService.signup(dto);
  }
}
