import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithEmailAndPassword,
    // createUserWithEmailAndPassword, 
    sendPasswordResetEmail ,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4UswGjxB6GXdVKUjDtN_02fta1kywMmg",
    authDomain: "foodtroc-f0edf.firebaseapp.com",
    projectId: "foodtroc-f0edf",
    storageBucket: "foodtroc-f0edf.appspot.com",
    messagingSenderId: "48757340850",
    appId: "1:48757340850:web:c7977e6c8accedfd92e7ab"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

//   const registerWithEmailAndPassword = async (name, email, password) => {
//     try {
//     //   const res = await createUserWithEmailAndPassword(auth, email, password);
//     //   const user = res.user;
//     //   await addDoc(collection(db, "users"), {
//     //     uid: user.uid,
//     //     name,
//     //     authProvider: "local",
//     //     email,
//     //   });
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    getAuth,
    logInWithEmailAndPassword,
    // registerWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };


