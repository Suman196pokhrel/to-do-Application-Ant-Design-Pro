import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Landing from "./pages/Landing/Landing"
import HomePage from "./pages/Homepage/HomePage"
import "./pages/Landing/Landing.css"




export default function App() {


  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<HomePage />}/>
      </Routes>
    </div>
  );
}

