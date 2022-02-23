import { storeUserCredential } from "utils/userCredential";
import { auth, db, providerGoogle, storage } from "./firebaseConfig";

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
          storeUserCredential(response.user);

          resolve(response.user);
        })
        .catch((err) => reject(err.message));
    });
  },
  // dang ky
  signUpWithEmailAndPassword: (name, email, password, avatar) => {
    return new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          updateProfile(userCredential, name, avatar)
            .then((user) => {
              resolve(user);
            })
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err.message));
    });
  },
};

const storeUserInDb = (response) => {
  if (response.additionalUserInfo?.isNewUser) {
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

const updateProfile = (userCredential, name, image) => {
  return new Promise((resolve, reject) => {
    if (image) {
      let uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (err) => console.log(err),
        () => {
          // completed upload
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              userCredential.user
                .updateProfile({
                  photoURL: url,
                  displayName: name,
                })
                .then(() => {
                  storeUserInDb(userCredential);
                  storeUserCredential(userCredential.user);

                  resolve(userCredential.user);
                });
            })
            .catch((err) => reject(err));
        }
      );
    } else {
      userCredential.user
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          storeUserInDb(userCredential);
          storeUserCredential(userCredential.user);

          resolve(userCredential.user);
        });
    }
  });
};

export default firebaseClient;
