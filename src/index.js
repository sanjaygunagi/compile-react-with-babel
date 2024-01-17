import { createRoot } from 'react-dom/client';
import App from "./App";
import React from 'react';

console.log('App', App);

createRoot(document.getElementById('root')).render(
    <div>
        <App/>
    </div>
);