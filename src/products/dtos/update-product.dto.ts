import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from '.';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty()
  id: string;
}
