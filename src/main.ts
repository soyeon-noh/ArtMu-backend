import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { twitterConfig } from './configs/twitterConfig';
import { TwitterApi } from 'twitter-api-v2';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // function home() {
  //   console.log('여기는?');
  //   const homeTimeline = await this.twitterClient.v1.homeTimeline();

  //   console.log(homeTimeline.tweets.length, 'fetched');

  //   const nextHomePage = await homeTimeline.next();
  //   console.log(
  //     'Fetched tweet IDs in next page:',
  //     nextHomePage.tweets.map((tweet) => tweet.id_str),
  //   );
  // };

  // home();
}
bootstrap();
