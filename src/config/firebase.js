import { auth, providerGoogle } from "./firebaseConfig";

const firebaseClient = {
  // dang nhap
  signInWithGoogle: () => {
    return new Promise((resolve, reject) => {
      auth
        .signInWithPopup(providerGoogle)
        .then((response) => resolve(response.user))
        .catch((err) => reject(err.message));
    });
  },
  signInWithEmailAndPassword: (email, password) => {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((response) => resolve(response.user))
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
          resolve(userCredential.user);
        })
        .catch((err) => reject(err.message));
    });
  },
};

export default firebaseClient;
