import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA4UswGjxB6GXdVKUjDtN_02fta1kywMmg',
  authDomain: 'foodtroc-f0edf.firebaseapp.com',
  projectId: 'foodtroc-f0edf',
  storageBucket: 'foodtroc-f0edf.appspot.com',
  messagingSenderId: '48757340850',
  appId: '1:48757340850:web:c7977e6c8accedfd92e7ab',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
};
