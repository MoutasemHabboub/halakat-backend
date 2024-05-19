import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const docsPath = `docs`;

  const config = new DocumentBuilder()
    .setTitle('Student API')
    .setDescription('The student API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(docsPath, app, document);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);

  Logger.log(
    `🚀 Application is running on: http://localhost:${3001}`,
    'NestApplication',
  );
  Logger.log(
    `😎 Swagger UI on: http://localhost:${3001}/${docsPath}`,
    'NestApplication',
  );
}
bootstrap();
