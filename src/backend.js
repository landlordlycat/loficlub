import firebase from "firebase";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

firebase
  .database()
  .ref(".info/connected")
  .on("value", function (snapshot) {
    // If we're not currently connected, don't do anything.
    if (snapshot.val() === false) {
      return;
    }

    // If we are currently connected, then use the 'onDisconnect()'
    // method to add a set which will only trigger once this
    // client has disconnected by closing the app,
    // losing internet, or any other means.
    firebase
      .database()
      .ref()
      .onDisconnect()
      .update({ listeningNow: firebase.database.ServerValue.increment(-1) })
      .then(function () {
        // The promise returned from .onDisconnect().set() will
        // resolve as soon as the server acknowledges the onDisconnect()
        // request, NOT once we've actually disconnected:

        // We can now safely set ourselves as 'online' knowing that the
        // server will mark us as offline once we lose connection.
        firebase
          .database()
          .ref()
          .update({ listeningNow: firebase.database.ServerValue.increment(1) });
      });
  });

export { db, auth };
