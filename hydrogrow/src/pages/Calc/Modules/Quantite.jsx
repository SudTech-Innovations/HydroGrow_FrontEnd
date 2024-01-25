import React, { useState } from "react";
import PlantCalc from "../../../components/Calculateur/PlantCalc";

export default function Quantite() {
  const [concentrationEng, setConcentrationEng] = useState(0);
  const [needsPlant, setNeedsPlant] = useState(0);
  const [quantityEng, setQuantityEng] = useState(0);

  // Reset function
  const resetValues = () => {
    setConcentrationEng(0);
    setNeedsPlant(0);
    setQuantityEng(0);
  };

  const handleConcentrationEngChange = (event) => {
    const value = event.target.value;
    // Vérifiez si la valeur est un nombre positif ou nulle
    if (!isNaN(value) && parseFloat(value) >= 0) {
      setConcentrationEng(parseFloat(value));
    } else {
      // Si la valeur n'est pas valide, vous pouvez gérer cela selon vos besoins
      // Dans cet exemple, je réinitialise à 0, mais vous pouvez choisir un autre comportement
      setConcentrationEng(0);
    }
  };

  const handleNeedsPlantChange = (event) => {
    const value = event.target.value;
    // Vérifiez si la valeur est un nombre positif ou nulle
    if (!isNaN(value) && parseFloat(value) >= 0) {
      setNeedsPlant(parseFloat(value));
    } else {
      // Si la valeur n'est pas valide, vous pouvez gérer cela selon vos besoins
      // Dans cet exemple, je réinitialise à 0, mais vous pouvez choisir un autre comportement
      setNeedsPlant(0);
    }
  };

  return (
    <div className="module-container">
      <h1>Calculateur d'engrais pour plantes</h1>
      <div className="module-inputs">
        <div className="form-group">
          <label htmlFor="concentrationEng">
            Concentration de l'engrais (% * 10)
          </label>
          <input
            type="number"
            id="concentrationEng"
            value={concentrationEng}
            onChange={handleConcentrationEngChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="needsPlant">Besoins de la plante (mg/L)</label>
          <input
            type="number"
            id="needsPlant"
            value={needsPlant}
            onChange={handleNeedsPlantChange}
          />
        </div>
      </div>
      <div className="module-output">
        <div className="result">
          <p>Quantité d'engrais {quantityEng.toFixed(2)} mg/L </p>
        </div>
        <button onClick={resetValues}>Reset</button>
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
