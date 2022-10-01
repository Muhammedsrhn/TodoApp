import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    // here your api key fro fibase
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export { db };