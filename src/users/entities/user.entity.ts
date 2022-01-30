import { ApiProperty } from '@nestjs/swagger';
import { AuditableEntity } from 'src/common/entity/auditable.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends AuditableEntity {
  @ApiProperty()
  @Column({ type: 'varchar', length: 30, unique: true })
  name: string;
}
