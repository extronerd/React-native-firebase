import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBKqsV4jKMW0m26V9tmUhf1yNWOGD7Z_Ns',

  authDomain: 'mobile-app-71b24.firebaseapp.com',
  databaseURL: 'https://mobile-app-71b24.firebaseio.com',
  projectId: 'mobile-app-71b24',
  storageBucket: 'mobile-app-71b24.appspot.com',
  messagingSenderId: '265682225548',
  appId: '1:265682225548:android:3fd142d0fa20dfe2d5aea9',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };