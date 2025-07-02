import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ROLE_KEY } from '../enums/role.enum';

export function AppDecorators(...roles) {
  console.log('h');
  console.log('roles', roles);

//   return (traget, _key, desciption) => {
//     console.log(traget);
//     console.log(_key);
//     console.log(desciption);
//   };

    return applyDecorators(SetMetadata(ROLE_KEY, roles));
}
