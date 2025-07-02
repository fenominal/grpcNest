import {
  CommandHandler,
  EventBus,
  EventPublisher,
  ICommandHandler,
} from '@nestjs/cqrs';
import { FindOneCommandImpl } from '../impl';
import { HttpStatus } from '@nestjs/common';
import { findOneEvenetImpl } from '../../event/impl';
import { createRecord } from '@app/assetes/commanFunctions/dbService';
import { getAllSVC } from '@app/assetes';
import { OrmService } from 'common/common/orm/orm.service';

const svcList = getAllSVC();

@CommandHandler(FindOneCommandImpl)
export class FindOneCommandHandler
  implements ICommandHandler<FindOneCommandImpl>
{
  constructor(
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: FindOneCommandImpl) {
    console.log('hiii from command', command);

    // console.log(await this.userRepo.find())

    this.oneCommandExcute(command);

    return {
      error: [],
      data: '',
      message: 'return from command',
      status: HttpStatus.ACCEPTED,
    };
  }

  async oneCommandExcute(command: FindOneCommandImpl) {
    const { data, metadata } = command?.payload;
    this.eventBus.publish(new findOneEvenetImpl(data, metadata));
    // const makeNEwmodel = new entiteModel(data)

    // const hero = this.publisher.mergeObjectContext(
    //   await this.repository.findOneById(+heroId),
    // );
    // hero.addItem(itemId);
    return true;
  }
}
