import { NavbarWithMegaMenu } from "./Components/Navbar";
import Routes from "./Routes/Routes";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import BreadCrumbs from "./Components/BreadCrumbs";
import { BatchProvider } from "./Context/BatchContext";
function App() {
  return (
    <BatchProvider>
      <Router>
        <NavbarWithMegaMenu />
        <BreadCrumbs />
        <Routes />
      </Router>
    </BatchProvider>
  );
}

export default App;
