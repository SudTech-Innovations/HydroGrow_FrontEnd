import React, { useState, useEffect } from "react";

import "./PlantCalc.css";

// Calcul pour les besoins : Quantité d'engrais (mg/L) = Concentration de l'engrais (% * 10) / Besoins de la plante (mg/L)
export default function PlantCalc() {
  const [quantityEng, setQuantityEng] = useState(0);
  const [concentrationEng, setConcentrationEng] = useState(0);
  const [needsPlant, setNeedsPlant] = useState(0);

  useEffect(() => {
    // Calculate quantityEng every time any of the input values change
    if (concentrationEng > 0 && needsPlant > 0) {
      setQuantityEng(concentrationEng / needsPlant);
    }
  }, [concentrationEng, needsPlant]);

  // Bouton reset
  const resetValues = () => {
    setConcentrationEng("");
    setNeedsPlant("");
    setQuantityEng(0);
  };

  return (
    <div id="plantCalc">
      <h1>Calculateur d'engrais pour plantes</h1>

      <div className="form">
        <div className="plantCalc-inputs">
          <div className="form-group">
            <label htmlFor="concentrationEng">
              Concentration de l'engrais (% * 10)
            </label>
            <input
              type="number"
              id="concentrationEng"
              value={concentrationEng}
              onChange={(e) => setConcentrationEng(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="needsPlant">Besoins de la plante (mg/L)</label>
            <input
              type="number"
              id="needsPlant"
              value={needsPlant}
              onChange={(e) => setNeedsPlant(e.target.value)}
            />
          </div>
        </div>
        <div className="plantCalc-output">
          <div className="form-group">
            <label htmlFor="quantityEng">Quantité d'engrais (mg/L)</label>
            <input
              type="number"
              id="quantityEng"
              value={quantityEng}
              readOnly
            />
          </div>
          <button onClick={resetValues}>Reset</button>
        </div>
      </div>
    </div>
  );
}
