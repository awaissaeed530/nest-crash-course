import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './controllers';
import { Product } from './entities';
import { ProductsResolver } from './resolvers';
import { ProductsService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
