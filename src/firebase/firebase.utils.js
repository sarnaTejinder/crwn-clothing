import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB4HeeRFwYP6HnV-LGi3ZcfAKutRRz0Nxc",
    authDomain: "crwn-clothing-7dbca.firebaseapp.com",
    projectId: "crwn-clothing-7dbca",
    storageBucket: "crwn-clothing-7dbca.appspot.com",
    messagingSenderId: "1028658835447",
    appId: "1:1028658835447:web:c3d42df970e87a29fe88f2",
    measurementId: "G-31KK4R202T"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
