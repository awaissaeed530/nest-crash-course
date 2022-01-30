import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/common/pagination';
import { Product } from '../entities';

@ObjectType()
export class PaginatedProductDto extends Paginated(Product) {}
