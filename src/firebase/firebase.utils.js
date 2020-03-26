import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBzMJYHgFYnn0FPkWFOPzAgaWwThE0k42k",
    authDomain: "pockets-full.firebaseapp.com",
    databaseURL: "https://pockets-full.firebaseio.com",
    projectId: "pockets-full",
    storageBucket: "pockets-full.appspot.com",
    messagingSenderId: "217960528586",
    appId: "1:217960528586:web:98862c68791383227fd233",
    measurementId: "G-9YG060S5BX"
    };

    export const createUserProfileDocument = async (userAuth, additionalData ) => {
        if (!userAuth) return;
    
         const userRef = firestore.doc(`users/${userAuth.uid}`);
    
        const snapShot= await userRef.get();
    
        if(!snapShot.exists) {
            const { displayName, email} = userAuth;
            const createdAt = new Date();
    
            try {
                await userRef.set({
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
    
        console.log(snapShot);
    };
    
    firebase.initializeApp(config);
    
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();
    
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account'});
    export const signInWithGoogle = () => auth.signInWithPopup(provider);
    
    export default firebase;