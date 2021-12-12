import {initializeApp, getApps } from "firebase/app"
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCoakLpbn-5K82RyRZ1q79SQ_wykDWyoS0",
  authDomain: "auth-testing-51cbc.firebaseapp.com",
  projectId: "auth-testing-51cbc",
  storageBucket: "auth-testing-51cbc.appspot.com",
  messagingSenderId: "736944465320",
  appId: "1:736944465320:web:37316bdad2b2517107e99d",
  measurementId: "G-0G21WJSNCW"
};

if (getApps().length == 0) {
  initializeApp(firebaseConfig)
  console.log('Created client firebase app')
} else {
  console.log('Client firebase app already present.')
}

export const fbAuthGoogleProvider = new GoogleAuthProvider()
export const fbAuth = getAuth()
export const fbFirestore = getFirestore()