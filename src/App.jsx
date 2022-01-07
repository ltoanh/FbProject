import Header from "components/header";
import SignForm from "pages/sign";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes/Routes";
import { selectorUser } from "slice/userSlice";
import { updateInActiveUser } from "utils/updateOnlineUser";

function App() {
  const user = useSelector(selectorUser);

  // detect when user close page to change active => offline
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    
    if(user){
      updateInActiveUser(user.uid)
    };
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
