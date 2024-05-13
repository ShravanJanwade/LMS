import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./Routes/Routes"
import { NavbarWithMegaMenu } from "./Components/Navbar"
import BreadCrumbs from "./Components/BreadCrumbs"
function App() {

  return (
    <Router>
      <NavbarWithMegaMenu/>
      <BreadCrumbs/>
     <AppRoutes/>
    </Router>
  )
}

export default App
