import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC1R6XP6Zc2oOLg_p9JTzrCDYtj3fv2tbE",
  authDomain: "n-ec99b.firebaseapp.com",
  projectId: "n-ec99b",
  storageBucket: "n-ec99b.appspot.com",
  messagingSenderId: "783754164768",
  appId: "1:783754164768:web:5399c582846bbd334c1a45",
  measurementId: "G-9NCPMY1T2P",
};


// const firebaseConfig = {
//   // apiKey: "AIzaSyCRLvqdlafRu-_Ig89MtP8UfahjR0H5x5Q",
//   apiKey:"AIzaSyC1R6XP6Zc2oOLg_p9JTzrCDYtj3fv2tbE",
//   authDomain: "fir-d1dee.firebaseapp.com",
//   projectId: "fir-d1dee",
//   storageBucket: "fir-d1dee.appspot.com",
//   messagingSenderId: "223971359994",
//   // appId: "1:223971359994:web:9bb8ce42a45311ef0f5d43",
//  appId:"1:783754164768:web:5399c582846bbd334c1a45",
//   measurementId: "G-7YGG1K4X6H",
// };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };