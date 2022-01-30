import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class BaseEntity {
  @ApiProperty()
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
