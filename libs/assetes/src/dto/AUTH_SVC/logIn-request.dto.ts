import { logInRequest } from '@app/assetes/protos/AUTH_SVC/AUTH_SVC.pb';

export class AUTH_SVC_logInRequestDTO implements logInRequest {
  userName: string;
  password: string;
}
