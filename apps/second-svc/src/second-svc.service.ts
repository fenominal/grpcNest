import { Injectable } from '@nestjs/common';

@Injectable()
export class SecondSvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
