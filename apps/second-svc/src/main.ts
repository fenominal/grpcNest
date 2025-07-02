import { NestFactory } from '@nestjs/core';
import { SecondSvcModule } from './second-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(SecondSvcModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
