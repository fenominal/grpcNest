import { Inject, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class OrmService {
  private readonly repository?: Repository<any>;
  constructor(
    @Inject('ORM_ENTITIES') private options?: string[],
    private readonly entityManager?: EntityManager,
  ) {}

  public readonly getMyRepository = (
    EntityName: string,
  ): Repository<any> | undefined => {
    if (!this.options?.includes(EntityName)) {
      throw new RpcException(
        `Entity : "${EntityName}" not registered under forFeature`,
      );
    }
    return this.entityManager?.getRepository(EntityName);
  };
}
