import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { GetFirstqueryImpl } from '../impl';

@QueryHandler(GetFirstqueryImpl)
export class GetFirstqueryHandler implements IQueryHandler<GetFirstqueryImpl> {
  constructor() {}

  async execute(query: GetFirstqueryImpl) {
    return {
      error: [],
      data: null,
      message: 'Query Response from handler.',
      status: 0,
    };
  }
}
