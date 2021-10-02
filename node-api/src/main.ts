import { API_PORT } from './constants';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(API_PORT);
  console.log(`Listening on port ${API_PORT}...`);
}
bootstrap();
