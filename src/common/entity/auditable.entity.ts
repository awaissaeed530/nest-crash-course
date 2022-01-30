import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@ObjectType()
export class AuditableEntity extends BaseEntity {
  @ApiProperty({ required: false, type: Date })
  @Field({ nullable: true })
  @CreateDateColumn()
  createdOn?: Date;

  @ApiProperty({ required: false, type: Date })
  @Field({ nullable: true })
  @UpdateDateColumn()
  updatedOn?: Date;

  @ApiProperty({ required: false, type: Date })
  @Field({ nullable: true })
  @DeleteDateColumn()
  deletedOn?: Date;
}
