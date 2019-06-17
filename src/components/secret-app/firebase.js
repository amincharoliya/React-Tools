import * as firebase from 'firebase';

const settings = { timestampsInSnapshots: true };

let configs;

try {
  // eslint-disable-next-line import/no-unresolved, global-require
  configs = require('../../.keys');
// eslint-disable-next-line no-empty
} catch (_) {}


const config = {
  apiKey: configs.FIREBASE_API_KEY || process.env.FIREBASE_API_KEY, 
  authDomain: configs.FIREBASE_AUTH_DOMAIN || process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: configs.FIREBASE_DATABASE_URL || process.env.FIREBASE_DATABASE_URL,
  projectId: configs.FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID,
  storageBucket: configs.FIREBASE_STORAGE_BUCKET || process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: configs.FIREBASE_MESSAGING_SENDER_ID || process.env.FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
