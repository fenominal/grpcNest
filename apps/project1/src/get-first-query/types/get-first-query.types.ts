import { Metadata } from '@grpc/grpc-js';
import { getFirstqueryRequest, Hero } from '@app/assetes/protos/PROJECT1/PROJECT1.pb';

export type GetFirstqueryRequestPayload = {
  data: getFirstqueryRequest;
  metadata: Metadata;
  raw?: any;
};

export type GetFirstqueryResponsePayload = {
  message: string;
  status: number;
  error: string[];
  data: Hero | undefined;
};
