import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBhOWoJo864aEkahErFbXNY8BjMFLfUt3g",
  authDomain: "pathologywebapp.firebaseapp.com",
  projectId: "pathologywebapp",
  storageBucket: "pathologywebapp.appspot.com",
  messagingSenderId: "528907962074",
  appId: "1:528907962074:web:8731771f91e4b6eb7947e3",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

provider.setCustomParameters({ prompt: "select_account" });
export const singninWithGoogle = () => auth.signInWithPopup(provider);
export const projectFirestore = firebase.firestore();

export default firebase;
