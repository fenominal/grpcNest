import {
  getFirstqueryResponse,
  Hero,
} from '@app/assetes/protos/PROJECT1/PROJECT1.pb';

export class PROJECT1_GetFirstqueryResponseDTO
  implements getFirstqueryResponse
{
  data: Hero | undefined;
  status: number;
  message: string;
  error: string[];
}
