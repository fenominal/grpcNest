import { DynamicModule, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; 
import { WebhookApiService } from './webhook-api.service';
import { WebhookApiController } from './webhook-api.controller';

@Module({
  controllers: [WebhookApiController],
  providers: [WebhookApiService],
})
export class WebhookApiRootModule {}

export class WebhookApiModule {
  static async forRootAsync(options?: any): Promise<DynamicModule> {
    return {
      module: WebhookApiRootModule,
      providers: [{ provide: 'CONFIG_OPTIONS', useValue: { ...options } }],
      imports: [WebhookApiModule,HttpModule],
    };
  }
}
