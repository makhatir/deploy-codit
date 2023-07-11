import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./SwitchRoute.scss";
import HomePage from "../HomePage/HomePage";
import PageSearch from "../PageSearch/PageSearch";
import Sommaire from "../Sommaire/Sommaire";
import PageSearchGlobal from "../PageSearchGlobal/PageSearchGlobal";

function SwitchRoute(data) {

  
  return (
    <Router>
      <Header />
      <Nav props={data} />
      <div className="full-content">
      <Routes>
        <Route path="/" element={<HomePage props={data}/>} />
        <Route path="/sommaire/:id" element={<Sommaire props={data}/>} />
        <Route path="/detail-search/:param1/:param2" element={<PageSearch props={data} />} />
        <Route path="/search/:param1/:param2" element={<PageSearchGlobal props={data}/>} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}
export default SwitchRoute;
