import React from "react";
import Header from "./screen/Header";
import Estrategia from './screen/Metodo'
import Feedback from "./screen/Feedback";
import Checkout from "./screen/Checkout";
import Footer from "./screen/Footer";
import './style.css'

const App = () => {
  return (
    <>
      <Header/>
      <Estrategia />
      <Checkout />
      <Feedback />
      <Footer/>
    </>
  );
};

export default App;
