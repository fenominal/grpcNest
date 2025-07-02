import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  addReflectionToGrpcConfig,
  GrpcReflectionModule,
} from 'nestjs-grpc-reflection';

import { FindOneModule } from './find-one/find-one.module';
import { GetFirstQueryModule } from './get-first-query/get-first-query.module';
import { getAllSVC } from '@app/assetes';
import { returnGRpcReflaction } from '@app/assetes/commanFunctions/getGrpcTranport';
import { OrmModule } from 'common/common/orm/orm.module';

const svcList = getAllSVC();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GrpcReflectionModule.register(
      addReflectionToGrpcConfig(returnGRpcReflaction(svcList.project1)),
    ),
    OrmModule.forRoot(svcList.project1 ),
    FindOneModule.forRootAsync({ svcName: 'PROJECT1' }),
    GetFirstQueryModule.forRootAsync({ svcName: 'PROJECT1' }),
  ],
})
export class AppModule {}
