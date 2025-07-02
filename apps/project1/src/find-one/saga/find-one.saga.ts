import { Injectable } from '@nestjs/common';
import { ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { findOneEvenetImpl } from '../event/impl';

const itemId = '0';

@Injectable()
export class HeroesGameSagas {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<any> => {
    return events$.pipe(
      ofType(findOneEvenetImpl),
      //   delay(1000),
      map((event) => {
        console.log('Inside [HeroesGameSagas] Saga');
      }),
    );
  };
}
