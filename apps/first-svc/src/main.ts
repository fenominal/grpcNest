import { NestFactory } from '@nestjs/core';
import { getAllSVC, getServiceConfig } from '@app/assetes';
import { MicroserviceOptions } from '@nestjs/microservices';
import { INestMicroservice, Logger } from '@nestjs/common';
import * as colors from 'colors';

import { FirstSvcModule } from './first-svc.module';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
import { returnGRpcReflaction } from '@app/assetes/commanFunctions/getGrpcTranport';

const svcList = getAllSVC();

async function bootstrap() {
  const { port, proto } = getServiceConfig(svcList.first_svc);

  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      FirstSvcModule,
      addReflectionToGrpcConfig(returnGRpcReflaction(svcList.first_svc)),
    );
  await app.listen();
  Logger.log(
    colors.green(`${proto} start on ${port}.....`).bgWhite.underline.bold,
  );
}
bootstrap();
