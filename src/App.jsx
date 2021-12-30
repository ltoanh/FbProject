import Header from "components/header";
import SignForm from "pages/sign";

import { BrowserRouter } from "react-router-dom";
import Routes from "routes/Routes";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectorUser } from "slice/userSlice";

function App() {
  const user = useSelector(selectorUser);

  useEffect(() => {
    console.log(user);
  }, [user]);

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
