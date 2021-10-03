import { API_PORT } from './constants';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: '*',
  });
  app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(API_PORT || 8080);
  console.log(`Listening on port ${API_PORT || 8080}...`);
}
bootstrap();
