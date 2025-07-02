import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  GetFirstqueryRequestPayload,
  GetFirstqueryResponsePayload,
} from './types/get-first-query.types';
import { GetFirstqueryImpl } from './query/impl';

@Injectable()
export class GetFirstQueryService {
  constructor(private queryBus: QueryBus) {}
  public async getFirstQuery(
    payload: GetFirstqueryRequestPayload,
  ): Promise<GetFirstqueryResponsePayload> {
    return this.queryBus.execute(new GetFirstqueryImpl(payload));
  }
}
