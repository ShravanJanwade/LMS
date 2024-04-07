import { NavbarWithMegaMenu } from "./Components/Navbar";
import Routes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import BreadCrumbs from "./Components/BreadCrumbs";
function App() {
  return (
    <Router>
      <NavbarWithMegaMenu />
      <BreadCrumbs />
      <Routes />
    </Router>
  );
}

export default App;
