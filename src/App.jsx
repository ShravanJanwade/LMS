import "./App.css";
import { NavbarWithMegaMenu } from "./Components/Navbar";
import Routes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ComplexNavbar } from "./Components/ComplexNavbar";
function App() {
  return (
    <Router>
      <NavbarWithMegaMenu />
      {/* <ComplexNavbar /> */}
      <Routes />
    </Router>
  );
}

export default App;
