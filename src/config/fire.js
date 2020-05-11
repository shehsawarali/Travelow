import firebase from "firebase";
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 
  authDomain: 
  databaseURL:
  projectId: 
  storageBucket: 
  messagingSenderId:
  appId: 
  measurementId:
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const storage = firebase.storage();

// export default fire;
export {storage, fire as default}
