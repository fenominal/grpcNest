import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { FindOneCommandImpl } from './command/impl';
import {
  GetFirstCommandRequestPayload,
  GetFirstCommandResponsePayload,
} from './types/find-one.types';

@Injectable()
export class FindOneService {
  constructor(private commandBus: CommandBus) {}
  public async findserivce(payload): Promise<GetFirstCommandResponsePayload> {
    return this.commandBus.execute(new FindOneCommandImpl(payload));
  }
}
