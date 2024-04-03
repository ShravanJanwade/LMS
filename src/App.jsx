import './App.css'
import { NavbarWithMegaMenu } from './Components/Navbar';
import BatchDetailsCards from './Pages/BatchDetailsCards';
import  BatchDetailsTable  from './Pages/BatchDetailsTable';
import { useState } from 'react';
function App() {
  const [card,setCard]=useState(true);
  const toggleHandler=()=>{
    setCard(prev=>!prev)
  }
  return (
    <>
    <NavbarWithMegaMenu/>
    {card ? (
        <BatchDetailsCards card={card} toggleHandler={toggleHandler} />
      ) : (
        <BatchDetailsTable card={card} toggleHandler={toggleHandler} />
      )}
    </>
  )
}

export default App
