import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

import { FindOneService } from './find-one.service';
import { getFirstCommandRequestDTO } from './dto/hero-by-Id.dto';
import { RoleGuard } from '@app/assetes';
import { AppDecorators } from '@app/assetes/customeDecorater/app.decorator';

@Controller()
export class FindOneController {
  constructor(private readonly findOneService: FindOneService) {}

  @AppDecorators({
    eveName: 'test',
  })
  @RoleGuard('admin')
  @GrpcMethod('PROJECT1Service', 'getFirstCommand')
  getFirstCommand(
    data: getFirstCommandRequestDTO,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ) {
    call.sendMetadata(metadata);

    return this.findOneService.findserivce({ data, metadata });
  }
}
