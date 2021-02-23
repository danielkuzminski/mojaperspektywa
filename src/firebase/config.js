import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBkDHu0PhhGtvYlqFkc5tETjqA1Bb6WQ0w',
  authDomain: 'moja-perspektywa.firebaseapp.com',
  projectId: 'moja-perspektywa',
  storageBucket: 'moja-perspektywa.appspot.com',
  messagingSenderId: '891512748652',
  appId: '1:891512748652:web:d0349632f2b52d51ee3649',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };