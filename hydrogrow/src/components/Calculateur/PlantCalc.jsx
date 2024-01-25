import React, { useEffect } from "react";

export default function PlantCalc({
  concentrationEng,
  handleConcentrationEngChange,
  needsPlant,
  handleNeedsPlantChange,
  quantityEng,
  resetValues,
}) {
  useEffect(() => {
    // Calculate quantityEng every time any of the input values change
    if (concentrationEng > 0 && needsPlant > 0) {
      // Note: Avoid setting state directly, use the prop function
      quantityEng(concentrationEng / needsPlant);
    }
  }, [concentrationEng, needsPlant]);

  return null; // Replace with your actual UI
}
