import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsDefined,
  IsString,
  MinLength,
} from 'class-validator';

export class LoginRequestDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  username: string;

  @ApiProperty({ minLength: 8 })
  @MinLength(8)
  @IsDefined()
  @IsAlphanumeric()
  password: string;
}
