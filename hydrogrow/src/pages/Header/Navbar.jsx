import React from "react";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="navbar" className="cl-bar">
      <div className="navbar-left">
        <a href="/">HydroGrow</a>
      </div>
      <div className="navbar-right">
        <a href="/">Accueil</a>
        <a href="/about">A propos</a>
      </div>
    </div>
  );
}
