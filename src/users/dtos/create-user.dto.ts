import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ minLength: 4, maxLength: 30 })
  @MinLength(4)
  @MaxLength(30)
  @IsDefined()
  name: string;
}
