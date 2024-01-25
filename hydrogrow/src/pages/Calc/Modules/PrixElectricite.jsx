import React, { useState } from "react";

const PrixElectricite = () => {
  const defaultPrice = 0.207;
  const [price, setPrice] = useState(defaultPrice);
  const [power, setPower] = useState(0);
  const [usageTime, setUsageTime] = useState(0);
  const [electricityCost, setElectricityCost] = useState("0.00");

  const calculateCost = () => {
    const cost = (power * usageTime * price) / 1000;
    setElectricityCost(cost.toFixed(2));
  };

  const resetValues = () => {
    setPower(0);
    setUsageTime(0);
    setElectricityCost("0.00");
  };

  const handlePowerChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setPower(value);
    } else {
      setPower(0);
    }
  };

  const handleUsageTimeChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setUsageTime(value);
    } else {
      setUsageTime(0);
    }
  };

  return (
    <div className="module-container">
      <h1>Calculateur de coût électrique</h1>
      <div className="module-inputs">
        <div className="form-group">
          <label htmlFor="price">Prix de l'électricité (€/kWh)</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="power">Puissance (W)</label>
          <input
            type="number"
            id="power"
            value={power}
            onChange={handlePowerChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="usageTime">Temps d'utilisation (heures)</label>
          <input
            type="number"
            id="usageTime"
            value={usageTime}
            onChange={handleUsageTimeChange}
          />
        </div>
      </div>
      <div className="module-output">
        <div className="result">
          <p>Coût électrique : {electricityCost} €</p>
        </div>
        <button onClick={calculateCost}>Calculer le coût</button>
        <button onClick={resetValues}>Réinitialiser</button>
      </div>
    </div>
  );
};

export default PrixElectricite;
