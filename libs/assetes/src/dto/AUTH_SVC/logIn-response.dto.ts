import {
  logInData,
  logInResponse,
} from '@app/assetes/protos/AUTH_SVC/AUTH_SVC.pb';

export class AUTH_SVC_logInResponseDTO implements logInResponse {
  data: logInData | undefined;
  status: number;
  message: string;
  error: string[];
}
