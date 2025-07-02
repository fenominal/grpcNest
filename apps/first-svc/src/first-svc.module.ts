import { Module } from '@nestjs/common';
import {
  addReflectionToGrpcConfig,
  GrpcReflectionModule,
} from 'nestjs-grpc-reflection';
import { ConfigModule } from '@nestjs/config';
import { returnGRpcReflaction } from '@app/assetes/commanFunctions/getGrpcTranport';
import { getAllSVC } from '@app/assetes';

const svcList = getAllSVC();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GrpcReflectionModule.register(
      addReflectionToGrpcConfig(returnGRpcReflaction(svcList.first_svc)),
    ),
  ],
  controllers: [],
  providers: [],
})
export class FirstSvcModule {}
