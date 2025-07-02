import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WebhookApiModule } from './webhook-api/webhook-api.module';
import { GatewayModule } from './websockets/websockets.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    WebhookApiModule.forRootAsync({ svcName: 'REST_WEBHOOK' }),
    GatewayModule,
  ],
  controllers: [],
  providers: [],
})
export class RestWebhooksModule {}
