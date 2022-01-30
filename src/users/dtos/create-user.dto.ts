import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ minLength: 4, maxLength: 30 })
  name: string;
}
