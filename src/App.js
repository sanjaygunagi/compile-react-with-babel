import React, { Suspense, lazy } from "react";
import './app.scss';

const Test = lazy(() => import('./Test'));

const  App = () => {
   return ( <div className="app">
        <h1 style={{color: 'green'}}>App Hi Hello Hi Check Test Tesstttt</h1>
       <Suspense fallback={<div>Loading..</div>}>
            <Test/>
        </Suspense>
    </div>)
}

export default App;