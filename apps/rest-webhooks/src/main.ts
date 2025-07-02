import { NestFactory } from '@nestjs/core';
import { RestWebhooksModule } from './rest-webhooks.module';

async function bootstrap() {
  const app = await NestFactory.create(RestWebhooksModule);
  await app.listen(9001, () => console.log('Running on Port 9001'));
}
bootstrap();
