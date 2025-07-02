import { Controller, Get } from '@nestjs/common';
import { SecondSvcService } from './second-svc.service';

@Controller()
export class SecondSvcController {
  constructor(private readonly secondSvcService: SecondSvcService) {}

  @Get()
  getHello(): string {
    return this.secondSvcService.getHello();
  }
}
