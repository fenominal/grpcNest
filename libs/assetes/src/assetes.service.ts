import { Injectable } from '@nestjs/common';
import * as DTO from './dto';
import * as Entities from './entities';

@Injectable()
export class AssetesService {
  static getMyDTO(dtoName: string, svcName: string): any {
    return DTO[`${svcName}_${dtoName}`];
  }

  static getMyEntity(entityName: string, svcName: string): any {
    return Entities[`Entity_${svcName}_${entityName}`];
  }

  static getAllEntitys(svcName: string): any {
    return Object.fromEntries(
      Object.entries(Entities).filter(([k]) =>
        k.startsWith(`Entity_${svcName}_`),
      ),
    );
  }

  public getMyDTO(dtoName: string, svcName: string): any {
    return AssetesService.getMyDTO(dtoName, svcName);
  }

  public getMyEntity(entityName: string, svcName: string): any {
    return AssetesService.getMyEntity(entityName, svcName);
  }
}
