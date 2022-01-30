import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await configureSwagger(app);
  await app.listen(3000);
}
bootstrap();

async function configureSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('Nest APIs practice application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
}
