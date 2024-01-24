import React from "react";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="navbar" className="cl-bar">
      {/* Navbar du coté gauche */}
      <div className="navbar-left">
        <a href="/">HydroGrow</a>
      </div>

      {/* Navbar du coté droit */}
      <div className="navbar-right">
        <a href="/">Accueil</a>
        <a href="/about">A propos</a>
      </div>
    </div>
  );
}
