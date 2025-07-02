import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { findOneEvenetImpl } from '../impl';

@EventsHandler(findOneEvenetImpl)
export class FindOneEvenetImplHandler
  implements IEventHandler<findOneEvenetImpl>
{
  handle(event: findOneEvenetImpl) {
    console.log('Async HeroFoundItemEvent...');
  }
}
