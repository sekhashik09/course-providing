import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./App.css"
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { RouterProvider } from "react-router-dom";
import router from './router/router.jsx'
// import Home from './home/home.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router}/>
    
  </React.StrictMode>
)

