import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { WebhookApiService } from './webhook-api.service';

@Controller('webhook-api')
export class WebhookApiController {
  constructor(
    private readonly webhookApiService: WebhookApiService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  get() {
    return 'HI';
  }

  @Post()
  CreateData(@Body() data) {

    this.httpService
      .post('https://webhook.site/4a27d3ef-8ed1-4c0a-b5b4-592c628855be ', data)
      .subscribe({
        complete: () => {
          console.log('completed');
        },
        error: (err) => {
          // you can handle error requests here
        },
      });

    return "hi";
  }
}
