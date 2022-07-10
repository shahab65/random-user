import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "styles/index.css";
import ReactQueryProvider from "./ReactQueryProvider";
import RandomUser from "pages/RandomUser";
function App() {
  return (
    <ReactQueryProvider>
      <RandomUser />
    </ReactQueryProvider>
  );
}

export default App;
