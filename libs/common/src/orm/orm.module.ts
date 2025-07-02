import { DynamicModule, Module } from '@nestjs/common';
import { OrmService } from './orm.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RpcException } from '@nestjs/microservices';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AssetesService } from '@app/assetes/assetes.service';
import { getTYPEORM } from '@app/assetes';
const insts = {};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    {
      provide: `ORM_ENTITIES`,
      useValue: undefined,
    },
    OrmService,
  ],
  exports: [OrmService],
})
export class RootOrmModule {}

@Module({})
export class OrmModule {
  static forRoot(svcName: string): DynamicModule {
    const { DBHOST, DBPORT, DBUSERNAME, DBPASSWORD, DBNAME } =
      getTYPEORM(svcName);

    return {
      module: RootOrmModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: async (
            configService: ConfigService,
          ): Promise<TypeOrmModuleOptions> => ({
            type: 'postgres',
            host: DBHOST,
            port: 5432,
            username: DBUSERNAME,
            password: DBPASSWORD,
            database: DBNAME,
            entities: AssetesService.getAllEntitys(svcName),
            synchronize: true,
          }),
          inject: [ConfigService],
        }),
      ],
    };
  }
}
