import React from 'react'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () => {
    return (
        <main className='App'>
              <Helmet>
                <title>LMS</title>
            </Helmet>
            <header>Dashboard Header</header>
            <Outlet />
            <footer>Dashboard Footer</footer>
    </main>
    )
}

export default DashBoardLayout