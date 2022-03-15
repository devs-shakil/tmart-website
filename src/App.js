import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import LoginRegisterIndex from './pages/login-and-register';
import Shop from './pages/shop'


function App() {
  return (
    <div className="wrapper fixed__footer">
      <Routes>
          <Route exact path="/" element={<Home />}/> 
          <Route exact path="/portfolio" element={<Portfolio />}/> 
          <Route exact path="/contact" element={<Contact />}/> 
          <Route exact path="/shop" element={<Shop/>}/> 
          <Route exact path="/Login-Register" element={<LoginRegisterIndex/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
