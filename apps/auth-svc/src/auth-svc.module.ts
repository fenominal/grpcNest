import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  addReflectionToGrpcConfig,
  GrpcReflectionModule,
} from 'nestjs-grpc-reflection';

import { getAllSVC } from '@app/assetes';
import { returnGRpcReflaction } from '@app/assetes/commanFunctions/getGrpcTranport';
import { LoginModule } from './login/login.module';

const svcList = getAllSVC();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GrpcReflectionModule.register(
      addReflectionToGrpcConfig(returnGRpcReflaction(svcList.auth_svc)),
    ),
    LoginModule,
  ],
})
export class AuthSvcModule {}
