import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { AuditableEntity } from 'src/common/entity';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class Product extends AuditableEntity {
  @ApiProperty()
  @Field()
  @Column({ type: 'varchar', length: 30, nullable: false })
  name: string;

  @ApiProperty()
  @Field()
  @Column({ type: 'varchar', length: 30, unique: true, nullable: false })
  sku: string;
}
