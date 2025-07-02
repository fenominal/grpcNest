import { Metadata } from '@grpc/grpc-js';

export type getFirstCommandRequest = {
  readonly id: number;
};

export type GetFirstCommandRequestPayload = {
  data: getFirstCommandRequest;
  metadata: Metadata;
  raw?: any;
};

export type GetFirstCommandResponsePayload = {
  message: string;
  status: number;
  error: string[];
  data: string | undefined;
};
