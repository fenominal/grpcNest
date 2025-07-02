import { Module } from '@nestjs/common';
import { ProtosService } from './protos.service';

@Module({
  controllers: [],
  providers: [ProtosService],
})
export class ProtosModule {}
