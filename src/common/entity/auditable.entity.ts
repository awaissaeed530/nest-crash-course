import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

export class AuditableEntity extends BaseEntity {
  @ApiProperty({ required: false, type: Date })
  @CreateDateColumn()
  createdOn?: Date;

  @ApiProperty({ required: false, type: Date })
  @UpdateDateColumn()
  updatedOn?: Date;

  @ApiProperty({ required: false, type: Date })
  @DeleteDateColumn()
  deletedOn?: Date;
}
