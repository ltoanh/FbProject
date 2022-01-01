const { db } = require("config/firebaseConfig")

export const updateOnlineUser = (uid) => {
  db.collection("users").doc(uid).update({
    online: true
  });
}

export const updateInActiveUser = (uid) => {
  db.collection("users").doc(uid).update({
    online: false,
  })
}

