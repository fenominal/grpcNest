import { join } from 'path';
import * as pb from './PROJECT1.pb';
export const PROJECT1_PROTO = {
  pb,
  libIncludeDirs: 'libs/assets/src/proto',
  protoPath: join(
    '/libs/assets/src/proto',
    'PROJECT1',
    'PROJECT1.proto',
  ),
};
