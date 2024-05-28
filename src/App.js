import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Fiche from "./pages/Fiche";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fiche/:id" element={<Fiche />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
