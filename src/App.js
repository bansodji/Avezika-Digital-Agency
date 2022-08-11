import React from "react";
import Header from "./Layout/Header";
import './App.scss';
import Footer from "./Layout/Footer";
import { Routes, Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      <Footer />
    </>

  );
}

export default App;