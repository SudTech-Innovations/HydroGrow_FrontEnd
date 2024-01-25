import React, { useState } from "react";
import PlantCalc from "../../components/Calculateur/PlantCalc";

export default function Calculateur() {
  const [concentrationEng, setConcentrationEng] = useState(0);
  const [needsPlant, setNeedsPlant] = useState(0);
  const [quantityEng, setQuantityEng] = useState(0);

  // Reset function
  const resetValues = () => {
    setConcentrationEng(0);
    setNeedsPlant(0);
    setQuantityEng(0);
  };

  return (
    <div>
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

      {/* Pass state and functions as props to PlantCalc component */}
      <PlantCalc
        concentrationEng={concentrationEng}
        handleConcentrationEngChange={(e) =>
          setConcentrationEng(e.target.value)
        }
        needsPlant={needsPlant}
        handleNeedsPlantChange={(e) => setNeedsPlant(e.target.value)}
        quantityEng={setQuantityEng}
        resetValues={resetValues}
      />
    </div>
  );
}
