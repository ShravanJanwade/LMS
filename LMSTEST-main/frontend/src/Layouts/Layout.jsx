import React from 'react'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
  <main className='App'>
    <header>Open pages</header>
    <Outlet/>
  </main>
  )
}

export default Layout