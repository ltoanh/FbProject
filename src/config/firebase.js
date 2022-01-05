import { storeUserCredential } from "utils/userCredential";
import { auth, db, providerGoogle } from "./firebaseConfig";

const firebaseClient = {
  // dang nhap
  signInWithGoogle: () => {
    return new Promise((resolve, reject) => {
      auth
        .signInWithPopup(providerGoogle)
        .then((response) => {
          storeUserInDb(response);
          storeUserCredential(response.user);

          resolve(response.user);
        })
        .catch((err) => reject(err.message));
    });
  },
  signInWithEmailAndPassword: (email, password) => {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          storeUserInDb(response);
          resolve(response.user);
        })
        .catch((err) => reject(err.message));
    });
  },
  // dang ky
  signUpWithEmailAndPassword: (name, email, password) => {
    return new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          auth.currentUser.updateProfile({
            displayName: name,
          });
          storeUserInDb(userCredential);
          resolve(userCredential.user);
        })
        .catch((err) => reject(err.message));
    });
  },
};

const storeUserInDb = (response) => {
  if(response.additionalUserInfo?.isNewUser){
    let user = response.user;
    let storedUser = {
      uid: user.uid,
      name: user.displayName,
      profileSrc: user.photoURL,
      online: true,
    };
    db.collection("users").doc(user.uid).set(storedUser);
  }
};

export default firebaseClient;
