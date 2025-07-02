import { join } from 'path';
import * as pb from './FIRST_SVC.pb';
export const FIRST_SVC_PROTO = {
  pb,
  libIncludeDirs: 'libs/assets/src/proto',
  protoPath: join(
    '/libs/assets/src/proto',
    'FIRST_SVC',
    'FIRST_SVC.proto',
  ),
};
