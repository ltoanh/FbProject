import Header from "components/header";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes/Routes";
import { selectorUser } from "slice/userSlice";
import { updateInActiveUser } from "utils/updateOnlineUser";

function App() {
  const user = useSelector(selectorUser);

  // detect when user close page to change active => offline
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();

    if (user) {
      updateInActiveUser(user.uid);
    }
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
