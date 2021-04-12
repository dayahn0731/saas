import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
require("dotenv").config();

// TODO: change to .env
const firebaseConfig = {
    apiKey: "AIzaSyA5y1nv-D0D0z4fKzsmzwTEPchEHfnP6Qg",
    authDomain: "slingshot-saas-27f0c.firebaseapp.com",
    projectId: "slingshot-saas-27f0c",
    storageBucket: "slingshot-saas-27f0c.appspot.com",
    messagingSenderId: "299866784970",
    appId: "1:299866784970:web:da55e68e479a880997a033",
    measurementId: "G-G0MJPD2C8P"
};

const app = firebase.initializeApp(firebaseConfig);
  
// global functions
// export const generateUserDocument = (user, additionalData) => {
//     if (!user) return null;
//     return firestore.doc(`users/${user.uid}`).get().then((snapshot) => {
//         if (!snapshot.exists) {
//             const { email } = user; 
//             return firestore.doc(`users/${user.uid}`).set({
//                 email: email,
//                 userType: additionalData ? additionalData.userType : "",
//             }).then(() => {
//                 return getUserDocument(user.uid);
//             })
//         }
//     })
// };

// const getUserDocument = uid => {
//     if (!uid) return;
//     return firestore.doc(`users/${uid}`).get().then((userDocument) => {
//         return {
//             uid,
//             ...userDocument.data()
//         };
//     }).catch(() => {
//         return null;
//     })
// };

// export const createUserWithEmailAndPassword = (email, password, additionalDetails) => {
//     try {
//       return auth.createUserWithEmailAndPassword(email, password).then((user) => {
//         return generateUserDocument(user, additionalDetails);
//       })
//     } catch (error) {
//         console.log("error has occured while signing someone up, " + error);
//         return null;
//     }
// };

export default app;