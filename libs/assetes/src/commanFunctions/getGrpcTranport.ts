import { GrpcOptions, Transport } from '@nestjs/microservices';
import { getAllSVC, getServiceConfig } from '@app/assetes';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';

const svcList = getAllSVC();

export const returnGRpcReflaction = (svcName): GrpcOptions => {
  const { port, host } = getServiceConfig(svcName);

  return {
    transport: Transport.GRPC,
    options: {
      url: `${host}:${port}`,
      package: [svcName],
      protoPath: `${process.env.DIRECTORY_PATH}/${svcName}/${svcName}.proto`,
      loader: {
        oneofs: true,
      },
    },
  };
};
