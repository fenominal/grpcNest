import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { INestMicroservice, Logger } from '@nestjs/common';
import { getAllSVC, getServiceConfig } from '@app/assetes';
import * as colors from 'colors';

import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
import { returnGRpcReflaction } from '@app/assetes/commanFunctions/getGrpcTranport';

const svcList = getAllSVC();

async function bootstrap() {
  const { port, proto } = getServiceConfig(svcList.project1);
  
  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      addReflectionToGrpcConfig(returnGRpcReflaction(svcList.project1)),
    );
  await app.listen();

  Logger.log(
    colors.green(`${proto} start on ${port}.....`).bgWhite.underline.bold,
  );
}

bootstrap();
