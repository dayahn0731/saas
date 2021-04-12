import firebaseApp from "../config";

const USERS = "users"
const auth = firebaseApp.auth()
const db = firebaseApp.firestore()

// returns promise after signing up and creating new user
export const createNewUser = (email, password, userType) => {
    return auth.createUserWithEmailAndPassword(email, password).then((userCred) => {
        const userUID = userCred.user.uid
        return db.collection(USERS).doc(userUID).set({
            uid: userUID,
            email: email,
            userType: userType,
        })
    })
}

// signs the user in after logn in 
export const signInUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
}