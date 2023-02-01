import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './pages/home/Home';
import Samples from './pages/samples/Samples';
import Services from './pages/services/Services';
import Navbar from './components/navbar/Navbar';
import Reviews from './components/reviews/Reviews';
import Contacts from './components/contacts/Contacts';
import Footer from "./components/footer/Footer";
import MainLogo from "./assets/MainLogo.png";



const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="#contacts" element={<Contacts />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App

