import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Routing from './Routing';


function App() {
  
  return (
    <div className="App">
    <Router>
        <Navbar/>
        <Routing/>
    </Router>
    </div>
  )
}

export default App
