import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import firebase from 'firebase-admin';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    return this.appService.getuserByUsername('twitter_ID');
  }

}
