import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider, signOut} from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDe0ld4OLf-5HRppM_tZeRA7bsv1OYSZqM",
  authDomain: "pruebatecnica-37c6b.firebaseapp.com",
  projectId: "pruebatecnica-37c6b",
  storageBucket: "pruebatecnica-37c6b.appspot.com",
  messagingSenderId: "807310581597",
  appId: "1:807310581597:web:49c8bc1c70a9ce0c3392b4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()

export const logOff = async () => {
    await signOut(auth)
}

