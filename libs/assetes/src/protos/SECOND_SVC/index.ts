import { join } from 'path';
import * as pb from './SECOND_SVC.pb';
export const SECOND_SVC_PROTO = {
  pb,
  libIncludeDirs: 'libs/assets/src/proto',
  protoPath: join(
    '/libs/assets/src/proto',
    'SECOND_SVC',
    'SECOND_SVC.proto',
  ),
};
