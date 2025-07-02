import { getFirstCommandResponse } from '@app/assetes/protos/PROJECT1/PROJECT1.pb';

export class findOneResponseDTO implements getFirstCommandResponse {
  data: string;
  status: number;
  message: string;
  error: string[];
}
