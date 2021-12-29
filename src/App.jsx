import Header from "components/header";
import SignForm from "pages/sign";

import { BrowserRouter } from "react-router-dom";
import Routes from "routes/Routes";

function App() {
  const user = null;

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
