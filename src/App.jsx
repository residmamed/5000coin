import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from "./navbar"
import Mainpage from './mainpage'
import Features from './Features'
function App() {
  

  return (
    <div className="App">
      <Navbar />
       <Mainpage />
       <Features />
    </div>
  )
}

export default App
