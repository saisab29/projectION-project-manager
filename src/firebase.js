import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCvJWlN3FUooqiZyMcIhP-N4Nwc5kjV3Gk",
    authDomain: "project-ion-fce56.firebaseapp.com",
    projectId: "project-ion-fce56",
    storageBucket: "project-ion-fce56.appspot.com",
    messagingSenderId: "594567170941",
    appId: "1:594567170941:web:a6ebde55cce5cc2b9c1a14",
    measurementId: "G-6EJ8P78H15"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const updateUserDatabase = (user, uid) => {
    setDoc(doc(db, 'dummy', "one"))

}

export { app as default, auth, db };
