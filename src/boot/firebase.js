import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage"
import "firebase/firebase-firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyABZHQcal1u7EGpIhitsPAdhIOUHbr5Lmw",
  authDomain: "middle-sex-school.firebaseapp.com",
  databaseURL: "https://middle-sex-school.firebaseio.com",
  projectId: "middle-sex-school",
  storageBucket: "middle-sex-school.appspot.com",
  messagingSenderId: "297220959046",
  appId: "1:297220959046:web:bf4128a434442e9b03d347",
  measurementId: "G-FQS80HV96N"
};


// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();
let firebaseStorage = firebaseApp.storage();
let db = firebaseApp.firestore();

export {
  firebaseAuth,
  firebaseDb,
  firebaseStorage,
  db
}
