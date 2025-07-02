import { DynamicModule, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { APP_GUARD } from '@nestjs/core';

import { FindOneService } from './find-one.service';
import { FindOneController } from './find-one.controller';
import { CommandHandlers } from './command/handler';
import { EventHandlers } from './event/handler';
import { SagaHandler } from './saga';

@Module({
  imports: [CqrsModule.forRoot()],
  controllers: [FindOneController],
  providers: [
    FindOneService,
    ...CommandHandlers,
    ...EventHandlers,
    ...SagaHandler,
  ],
})
export class RootFindOneModule {}

export class FindOneModule {
  static async forRootAsync(options?: any): Promise<DynamicModule> {
    return {
      module: RootFindOneModule,
      providers: [{ provide: 'CONFIG_OPTIONS', useValue: { ...options } }],
      imports: [FindOneModule],
    };
  }
}
