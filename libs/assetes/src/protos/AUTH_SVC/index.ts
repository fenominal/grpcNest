import { join } from 'path';
import * as pb from './AUTH_SVC.pb';
export const AUTH_SVC_PROTO = {
  pb,
  libIncludeDirs: 'libs/assets/src/proto',
  protoPath: join(
    '/libs/assets/src/proto',
    'AUTH_SVC',
    'AUTH_SVC.proto',
  ),
};
