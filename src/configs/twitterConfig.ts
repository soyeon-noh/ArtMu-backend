import { TwitterApi } from 'twitter-api-v2';

export class twitterConfig {
  // OAuth2
  twitterClient = new TwitterApi(process.env.BEARER_TOKEN);
  // token이 안 넘어오는 문제 발생

  // Read-only level
  roClient = this.twitterClient.readOnly;
}
