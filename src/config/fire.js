import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDJ_Dc35zVoj1s36HdzJwyslE9jt8ShDN4",
  authDomain: "travelow-take1.firebaseapp.com",
  databaseURL: "https://travelow-take1.firebaseio.com",
  projectId: "travelow-take1",
  storageBucket: "travelow-take1.appspot.com",
  messagingSenderId: "841019004829",
  appId: "1:841019004829:web:20cd28dce08c3cc8b7c174",
  measurementId: "G-969WGQZR0M",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
