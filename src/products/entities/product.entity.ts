import { ApiProperty } from '@nestjs/swagger';
import { AuditableEntity } from 'src/common/entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends AuditableEntity {
  @ApiProperty()
  @Column({ type: 'varchar', length: 30, nullable: false })
  name: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 30, unique: true, nullable: false })
  sku: string;
}
