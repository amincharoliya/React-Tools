import * as firebase from 'firebase';

const settings = { timestampsInSnapshots: true };

let configs;

try {
  // eslint-disable-next-line import/no-unresolved, global-require
  configs = require('../../.keys');
// eslint-disable-next-line no-empty
} catch (_) {}


const config = {
  apiKey: process.env.FIREBASE_API_KEY || configs.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || configs.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL || configs.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID || configs.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || configs.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || configs.FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
