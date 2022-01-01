import Header from "components/header";
import SignForm from "pages/sign";

import { BrowserRouter } from "react-router-dom";
import Routes from "routes/Routes";

import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";
import { db } from "config/firebaseConfig";

function App() {
  const user = useSelector(selectorUser);

  // detect when user close page to change active => offline
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    
    db.collection("users").doc(user.uid).update({
      online: false,
    });
  });

  return (
    <>
      {!user ? (
        <SignForm />
      ) : (
        <BrowserRouter>
          {/* Header */}
          <Header />
          {/* Body */}
          <Routes />
          {/* sidebar */}
          {/* feeds */}
          {/* widgets */}
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
