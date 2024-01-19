import React, { Suspense, lazy } from "react";
import './app.scss';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

const Test = lazy(() => import('./Test'));

const  App = () => {
   return ( <div className="app">
        <h1 style={{color: 'green'}}>App Hi Hello Hi Check Test Tesstttt</h1>
{/*          <Suspense fallback={<div>Loading..</div>}>
            <Test/>
        </Suspense> */}

        <BrowserRouter>

        <Link to='/test'>Test</Link>

        <Routes>
            <Route path="/test" element={ <Suspense fallback={<div>Loading..</div>}>
            <Test/>
        </Suspense>} />
        </Routes>
        
        </BrowserRouter>
      
    </div>)
}

export default App;