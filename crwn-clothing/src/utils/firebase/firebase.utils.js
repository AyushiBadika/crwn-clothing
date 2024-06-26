import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2cM3cxEkHOFJ_xIFm0mt-j3CaDJAeW18",
  authDomain: "crwn-clothing-db-1e3d2.firebaseapp.com",
  projectId: "crwn-clothing-db-1e3d2",
  storageBucket: "crwn-clothing-db-1e3d2.appspot.com",
  messagingSenderId: "626399162177",
  appId: "1:626399162177:web:faddf8bd328a8110693bc0",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
