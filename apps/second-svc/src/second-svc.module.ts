import { Module } from '@nestjs/common';
import { SecondSvcController } from './second-svc.controller';
import { SecondSvcService } from './second-svc.service';

@Module({
  imports: [],
  controllers: [SecondSvcController],
  providers: [SecondSvcService],
})
export class SecondSvcModule {}
