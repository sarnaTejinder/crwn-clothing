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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userRef
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
