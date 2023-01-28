import './App.css';
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Home from '../src/pages/Home'
import Game from '../src/pages/Game'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



