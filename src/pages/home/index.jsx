import Feeds from "./feeds";
import Sidebar from "components/sidebar";

import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="app__body">
      <Sidebar />
      <Feeds />
    </div>
  );
}

export default Home;
