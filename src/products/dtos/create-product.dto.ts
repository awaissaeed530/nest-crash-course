import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ type: 'string', minLength: 4, maxLength: 30 })
  @MinLength(4)
  @MaxLength(30)
  @IsDefined()
  @IsString()
  name: string;

  @ApiProperty({ type: 'string', minLength: 4, maxLength: 30 })
  @MinLength(4)
  @MaxLength(30)
  @IsDefined()
  @IsString()
  sku: string;
}
