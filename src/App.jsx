import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./Routes/Routes"
import { NavbarWithMegaMenu } from "./Components/Navbar"
function App() {

  return (
    <Router>
      <NavbarWithMegaMenu/>
     <AppRoutes/>
    </Router>
  )
}

export default App
