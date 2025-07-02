import { DynamicModule, Module } from '@nestjs/common';
import { GetFirstQueryService } from './get-first-query.service';
import { GetFirstQueryController } from './get-first-query.controller';
import { QueryHandlers } from './query/handler';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule.forRoot()],
  controllers: [GetFirstQueryController],
  providers: [GetFirstQueryService, ...QueryHandlers],
})
export class RootGetFirstQueryModule {}

export class GetFirstQueryModule {
  static async forRootAsync(options?: any): Promise<DynamicModule> {
    return {
      module: RootGetFirstQueryModule,
      providers: [{ provide: 'CONFIG_OPTIONS', useValue: { ...options } }],
      imports: [GetFirstQueryModule],
    };
  }
}
