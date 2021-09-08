import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-CSmZByyDJYJjuZjagFKUw-jOviFhbJo",
    authDomain: "mystore-eeca1.firebaseapp.com",
    projectId: "mystore-eeca1",
    storageBucket: "mystore-eeca1.appspot.com",
    messagingSenderId: "58909548915",
    appId: "1:58909548915:web:cc0b5e6ff3547ab52ba506"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;