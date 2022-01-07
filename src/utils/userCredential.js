export const storeUserCredential = (userCredential) => {
  localStorage.setItem(
    "FB_CLONE_userCredential",
    JSON.stringify(userCredential)
  );
};

export const getUserCredentialStorage = () =>
  JSON.parse(localStorage.getItem("FB_CLONE_userCredential"));

export const clearUserCredentialStorage = () => {
  localStorage.removeItem("FB_CLONE_userCredential");
};

export const setUserCustomInformation = (userCredential) => {
  return {
    name: userCredential.displayName,
    profileSrc: userCredential.photoURL,
    uid: userCredential.uid,
  };
}