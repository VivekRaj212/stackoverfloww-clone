import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Auth from "./pages/Auth/Auth";
import Questions from './pages/Questions/Questions';
import AskQuestion from './pages/AskQuestion/AskQuestion';
import DisplayQuestion from './pages/Questions/DisplayQuestion';

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path= "/auth" element={<Auth/>}/>
        <Route path='/Questions' element={<Questions/>}/>
        <Route path='/AskQuestion' element={<AskQuestion/>}/>
        <Route path="/Questions/:_id" element={<DisplayQuestion/>}/>
    </Routes>
  )
}

export default Routing;