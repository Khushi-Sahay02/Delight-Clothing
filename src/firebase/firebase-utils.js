import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config={apiKey: "AIzaSyCOTWxjJm63MlMKihSXzgMOtgQQSvRxOlw",
authDomain: "delight-db.firebaseapp.com",
projectId: "delight-db",
storageBucket: "delight-db.appspot.com",
messagingSenderId: "589044621761",
appId: "1:589044621761:web:06ea8e21ded42d727e4f40",
measurementId: "G-8MTQ8YZ5PH"
};

firebase.initializeApp(config);


export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInwithGoogle=()=>auth.signInWithPopup(provider);

export const createUserProfile= async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`user/${userAuth.uid}`);
    const snapshot=await userRef.get();
    if(!snapshot.exists){
        const{displayName,email}=userAuth;
        const dateCreated=new Date();

        try{
            userRef.set({
                displayName,
                email,
                dateCreated,
                ...additionalData
            });
        }catch(error){
            console.log('Error ',error.message);
        }
    }
    return userRef;
}
export default firebase;


