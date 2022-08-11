import React from "react";
import Header from "./Layout/Header";
import Body from "./Layout/Body";
import './App.scss';
import Footer from "./Layout/Footer";
import { Routes, Route, Switch } from 'react-router-dom';
import About from "./About";


const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route exact path="/" element={<Body/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      <Footer />
    </>

  );
}

export default App;