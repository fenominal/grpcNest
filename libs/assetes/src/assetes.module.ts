import { Module } from '@nestjs/common';
import { AssetesService } from './assetes.service';

@Module({
  providers: [AssetesService],
  exports: [AssetesService],
  imports: [],
})
export class AssetesModule {}
