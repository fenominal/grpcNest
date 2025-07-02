import { Injectable } from '@nestjs/common';
import * as PROTOS from '@app/assetes';

@Injectable()
export class ProtosService {
  public getProto(svc: string): {
    pb: object;
    protoPath: string;
    libIncludeDirs: string;
  } {
    return ProtosService.getProto(svc);
  }

  static getProto(svc: string): {
    pb: object;
    protoPath: string;
    libIncludeDirs: string;
  } {
    return PROTOS[`${svc}_PROTO`];
  }
}
