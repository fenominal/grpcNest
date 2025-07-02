import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { GetFirstQueryService } from './get-first-query.service';
import { getFirstqueryRequestDTO } from './dto';

@Controller()
export class GetFirstQueryController {
  constructor(private readonly getFirstQueryService: GetFirstQueryService) {}

  @GrpcMethod('PROJECT1Service', 'getFirstquery')
  getFirstquery(
    data: getFirstqueryRequestDTO,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ) {
    call.sendMetadata(metadata);

    return this.getFirstQueryService.getFirstQuery({ data, metadata });
  }
}
