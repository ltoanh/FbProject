export const storeUserCredential = (userCredential) => {
  localStorage.setItem(
    "FB_CLONE_userCredential_token",
    JSON.stringify(userCredential)
  );
};

export const getUserCredentialStorage = () =>
  JSON.parse(localStorage.getItem("FB_CLONE_userCredential_token"));

export const clearUserCredentialStorage = () => {
  localStorage.removeItem("FB_CLONE_userCredential_token");
};
