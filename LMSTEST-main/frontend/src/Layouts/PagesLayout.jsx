import React from 'react'
import {Outlet} from 'react-router-dom'
import { Footer } from '../Components/Footer'
import { ComplexNavbar } from '../Components/ComplexNavbar'

const PagesLayout = () => {
  return (
  <main className='App'>
    <ComplexNavbar />
    <header>Pages Layout</header>
    <Outlet/>
    <Footer/>
  </main>
  )
}

export default PagesLayout