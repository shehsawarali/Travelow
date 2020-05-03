import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "./Fonts/Jost-Light.ttf";
import "./Fonts/Jost-Medium.ttf";
import "./Fonts/NotoSansJP-Medium.otf";
import "./Fonts/NotoSansJP-Light.otf";

// const firebase = require("firebase");
// require("firebase/firestore");

// var firebaseConfig = {
//   apiKey: "AIzaSyBFPRNiAkGTz0AhbXwMFha4mLt_RYNlacw",
//   authDomain: "travelow-32547.firebaseapp.com",
//   databaseURL: "https://travelow-32547.firebaseio.com",
//   projectId: "travelow-32547",
//   storageBucket: "travelow-32547.appspot.com",
//   messagingSenderId: "181654995140",
//   appId: "1:181654995140:web:73e325db8dd9fa23530991",
//   measurementId: "G-3XN8VNNF60",
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
