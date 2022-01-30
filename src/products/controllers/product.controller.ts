import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/gaurds';
import { CreateProductDto, UpdateProductDto } from '../dtos';
import { Product } from '../entities';
import { ProductsService } from '../services';

@ApiTags('Products')
@ApiBearerAuth()
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductsService) {}

  @ApiOkResponse({
    type: Product,
    isArray: true,
    description: 'Array of Product',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @ApiOkResponse({ type: Product, description: 'Product instance' })
  @ApiNotFoundResponse({ description: 'Product not found' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product> {
    if (await this.productService.existsById(id)) {
      return this.productService.findById(id);
    } else {
      throw new NotFoundException(`Product not found with id ${id}`);
    }
  }

  @ApiCreatedResponse({ type: Product, description: 'Product instance' })
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() product: CreateProductDto): Promise<Product> {
    return this.productService.create(product);
  }

  @ApiOkResponse({ type: Product, description: 'Product instance' })
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Body() product: UpdateProductDto,
    @Param('id') id: string,
  ): Promise<Product> {
    return this.productService.update(id, product);
  }

  @ApiOkResponse({ description: 'Product delete success' })
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return this.productService.deleteById(id);
  }
}
