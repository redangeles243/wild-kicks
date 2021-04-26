import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCpoijwmVQAyDGD2o20CkpCc5HNpzCraj8",
    authDomain: "crwn-db-9991c.firebaseapp.com",
    projectId: "crwn-db-9991c",
    storageBucket: "crwn-db-9991c.appspot.com",
    messagingSenderId: "1065558872129",
    appId: "1:1065558872129:web:81490adde982d33d9176c0",
    measurementId: "G-BRMNP4MY5F"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => { 
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    console.log(snapShot);
    
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set ({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
          console.log('error creating user', error.message);
      }
    }
    return userRef;
  }
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

