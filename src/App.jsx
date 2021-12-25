import Header from "components/header";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes/Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Header */}
        <Header />
        {/* Body */}
        <Routes />
        {/* sidebar */}
        {/* feeds */}
        {/* widgets */}
      </BrowserRouter>
    </>
  );
}

export default App;
