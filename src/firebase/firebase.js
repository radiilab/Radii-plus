import * as firebase from 'firebase';
import '@firebase/functions';
require("firebase/firestore");

const prodConfig = {
  apiKey: "AIzaSyDvrw3MpeJyFbRcU7gZs9o8nelq6I8ot8I",
  authDomain: "radii-website.firebaseapp.com",
  databaseURL: "https://radii-website.firebaseio.com",
  projectId: "radii-website",
  storageBucket: "radii-website.appspot.com",
  messagingSenderId: "592618696557"
};

const devConfig = {
  apiKey: "AIzaSyDvrw3MpeJyFbRcU7gZs9o8nelq6I8ot8I",
  authDomain: "radii-website.firebaseapp.com",
  databaseURL: "https://radii-website.firebaseio.com",
  projectId: "radii-website",
  storageBucket: "radii-website.appspot.com",
  messagingSenderId: "592618696557"
};

const config = process.env.RADII_SERVE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// using a recent beta build of cloud firestore
const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);
const auth = firebase.auth();
const messaging = firebase.messaging();
const storage = firebase.storage();
const functions = firebase.functions();

export {
  db,
  auth,
  messaging,
  storage,

};

export default   functions ;  // common js functions 