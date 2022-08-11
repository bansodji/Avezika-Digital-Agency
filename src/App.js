import React from "react";
import Header from "./Layout/Header";
import './App.scss';
import Footer from "./Layout/Footer";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Services } from "./Pages/Services";
import { Portfolio } from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      <Footer />
    </>

  );
}

export default App;