import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ServiceAccount } from "firebase-admin";
import firebase from "firebase-admin";


@Injectable()
export class FirebaseConfig {
	constructor(private configService: ConfigService) {

	}

	adminConfig: ServiceAccount = {
		"privateKey": this.configService.get<string>('FIREBASE_PRIVATE_KEY'),
		"projectId": this.configService.get<string>('FIREBASE_PROJECT_ID').replace(/\\n/g, '\n'),
		"clientEmail": this.configService.get<string>('FIREBASE_CLIENT_EMAIL'),

	}

	name() {
		firebase.initializeApp({
			credential: firebase.credential.cert(this.adminConfig),
			databaseURL: "https://ArtMu.firebaseio.com"
		})
	}

}