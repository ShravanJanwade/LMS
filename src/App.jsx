import "./App.css";
import { NavbarWithMegaMenu } from "./Components/Navbar";
import Routes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavbarWithMegaMenu />
      <Routes />
    </Router>
  );
}

export default App;
