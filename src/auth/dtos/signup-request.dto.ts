import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsDefined,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignupRequestDto {
  @ApiProperty({ minLength: 4, maxLength: 30 })
  @MinLength(4)
  @MaxLength(30)
  @IsDefined()
  @IsString()
  name: string;

  @ApiProperty({ minLength: 4, maxLength: 15 })
  @MinLength(4)
  @MaxLength(15)
  @IsDefined()
  @IsString()
  username: string;

  @ApiProperty({ minLength: 8 })
  @MinLength(8)
  @IsDefined()
  @IsAlphanumeric()
  password: string;
}
