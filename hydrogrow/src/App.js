import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/Header/Navbar";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";

import "./App.css";

function App() {

  return (
    <div id="app">
      <Navbar />

      <div id="main">
        <Routes>
          {/* Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Page 404 */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
