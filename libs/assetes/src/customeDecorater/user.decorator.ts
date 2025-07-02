import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ROLE_KEY } from '../enums/role.enum';

export function RoleGuard(...roles: string[]) {
  return applyDecorators(SetMetadata(ROLE_KEY, roles));
}
