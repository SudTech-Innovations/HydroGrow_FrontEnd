import React, { useState } from "react";

const PrixElectricite = () => {
  const defaultPrice = 0.207; // Prix par défaut en euros par kWh
  const [price, setPrice] = useState(defaultPrice);
  const [power, setPower] = useState(0);
  const [usageTime, setUsageTime] = useState(0);
  const [electricityCost, setElectricityCost] = useState(0);

  const calculateCost = () => {
    const cost = (power * usageTime * price) / 1000; // Coût en euros
    setElectricityCost(cost.toFixed(2)); // Fixer à deux décimales
  };

  return (
    <div className="plantCalc">
      <h2>Calculateur de coût électrique</h2>
      <div className="plantCalc-inputs">
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
            onChange={(e) => setPower(parseFloat(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="usageTime">Temps d'utilisation (heures)</label>
          <input
            type="number"
            id="usageTime"
            value={usageTime}
            onChange={(e) => setUsageTime(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="plantCalc-output">
        <div className="result">
          <p>Coût électrique : {electricityCost} €</p>
        </div>
        <button onClick={calculateCost}>Calculer le coût</button>
      </div>
    </div>
  );
};

export default PrixElectricite;
