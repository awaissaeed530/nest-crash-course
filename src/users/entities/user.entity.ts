import { ApiProperty } from '@nestjs/swagger';
import { AuditableEntity } from 'src/common/entity/auditable.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends AuditableEntity {
  @ApiProperty()
  @Column({ type: 'varchar', length: 30 })
  name: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 15, unique: true })
  username: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  password: string;
}
