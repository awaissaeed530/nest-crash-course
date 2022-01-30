import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from '../dtos';
import { Product } from '../entities';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findById(id: string): Promise<Product> {
    return this.productRepository.findOne({ where: { id } });
  }

  async existsById(id: string): Promise<boolean> {
    return (await this.productRepository.count({ where: { id } })) > 0;
  }

  async create(product: CreateProductDto): Promise<Product> {
    return this.productRepository.save(product);
  }

  async update(id: string, product: UpdateProductDto): Promise<Product> {
    if (id === product.id) {
      if (await this.existsById(id)) {
        return this.productRepository.save(product);
      } else {
        throw new NotFoundException(`Product not found with id ${id}`);
      }
    } else {
      throw new BadRequestException();
    }
  }

  async deleteById(id: string): Promise<void> {
    if (await this.existsById(id)) {
      await this.productRepository.softDelete(id);
    } else {
      throw new NotFoundException();
    }
  }
}
