import { DynamicModule, Global, Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { OrmModule } from './orm/orm.module';
import { ProtosModule } from './protos/protos.module';

@Module({
  providers: [CommonService],
  exports: [CommonService],
  imports: [OrmModule, ProtosModule],
})
export class RootCommonModule {}

@Global()
@Module({})
export class CommonModule {
  static async forRootAsync(options?: any): Promise<DynamicModule> {
    return {
      module: RootCommonModule,
      providers: [{ provide: 'CONFIG_OPTIONS', useValue: { ...options } }],
      imports: [CommonModule, OrmModule.forRoot(options.svcName)],
    };
  }
}
