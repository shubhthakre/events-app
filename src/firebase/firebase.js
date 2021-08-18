import firebase from 'firebase';

var firebaseConfig = {
  // Firebase credentials
  apiKey: 'AIzaSyDMmVd5TSErbzcLrUScNa9IVeYVWcoaVC4',
  authDomain: 'event-app-c608d.firebaseapp.com',
  projectId: 'event-app-c608d',
  storageBucket: 'event-app-c608d.appspot.com',
  messagingSenderId: '319936846371',
  appId: '1:319936846371:web:36526be35633ace5832f96',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
