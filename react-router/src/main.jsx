import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import About from './About';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
;
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
)
 