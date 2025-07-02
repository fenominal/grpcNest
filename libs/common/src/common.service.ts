import { Inject, Injectable } from '@nestjs/common';
import { svcNameObjects } from './svcNames';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
import { GrpcOptions, Transport } from '@nestjs/microservices';

const svcInsts = {};
export type svcTypes = Readonly<typeof svcNameObjects.enum.svcName>;

@Injectable()
export class CommonService {
  private _options: Record<string, any>;
  constructor(@Inject('CONFIG_OPTIONS') private options: Record<string, any>) {
    if (options) {
      this._options = options;
    }
    if (!svcInsts[options?.svcName]) {
      svcInsts[options?.svcName] = this;
    }
    svcNameObjects._self = svcInsts[options?.svcName];
  }
  static getAllSvcNames(): any {
    return svcNameObjects.enum.svcName;
  }

  public getAllSvcNames(): any {
    return CommonService.getAllSvcNames();
  }

  // public getMyTransport(svcName?: svcTypes): GrpcOptions {
  //   const svc = svcName;
  //   const host: string = process.env[`${svc}_HOST`] || '0.0.0.0';
  //   const port: string = process.env[`${svc}_PORT`] || '40000';
  //   const proto: { pb: object; protoPath: string; libIncludeDirs: string } =
  //   svcNameObjects._self.getProto(svc);

  //   return addReflectionToGrpcConfig({
  //     transport: Transport.GRPC,
  //     options: {
  //       url: `${host}:${port}`,
  //       package: ["PROJECT1"],
  //       protoPath: [proto?.protoPath],
  //       loader: {
  //         oneofs: true,
  //         includeDirs: [proto?.libIncludeDirs],
  //       },
  //     },
  //   });
  // }
}
