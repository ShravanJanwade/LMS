import React from 'react'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import App from '../App';
import Page from '../component/Page';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
         <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Page/>}/>

            </Route>
         </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router