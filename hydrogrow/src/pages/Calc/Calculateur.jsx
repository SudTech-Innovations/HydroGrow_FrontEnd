import React from "react";

import Quantite from "./Modules/Quantite";
import PrixElectricite from "./Modules/PrixElectricite";

import "./Calculateur.css";

export default function Calculateur() {
  return (
    <div id="calculateur">
      <Quantite />
      <PrixElectricite />
    </div>
  );
}
