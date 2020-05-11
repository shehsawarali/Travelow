import firebase from "firebase";
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyD50GG9K_IB9H6vsqkqz2WGS4p7SGHrHAA",
  authDomain: "project-travelow.firebaseapp.com",
  databaseURL: "https://project-travelow.firebaseio.com",
  projectId: "project-travelow",
  storageBucket: "project-travelow.appspot.com",
  messagingSenderId: "1041547109781",
  appId: "1:1041547109781:web:e8974c05a023bbe26e029c",
  measurementId: "G-SG9LEGCYDK"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const storage = firebase.storage();

// export default fire;
export {storage, fire as default}
