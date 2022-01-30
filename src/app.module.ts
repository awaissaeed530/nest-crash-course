import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'remote_day',
      synchronize: true,
      autoLoadEntities: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: {
        endpoint: 'graphql',
      },
    }),
    UsersModule,
    ProductsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
