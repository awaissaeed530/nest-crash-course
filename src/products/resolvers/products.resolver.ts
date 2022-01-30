import { Args, Query, Resolver } from '@nestjs/graphql';
import { Product } from '../entities';
import { ProductsService } from '../services';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query((returns) => [Product])
  async products(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Query((returns) => Product)
  async product(@Args('id') id: string): Promise<Product> {
    return this.productService.findById(id);
  }
}
