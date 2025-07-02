import { GetFirstCommandRequestPayload } from '../../types/find-one.types';

export class FindOneCommandImpl {
  constructor(public readonly payload: GetFirstCommandRequestPayload) {}
}
