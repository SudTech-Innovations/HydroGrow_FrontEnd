import { useEffect } from "react";

export default function PlantCalc({
  concentrationEng,
  needsPlant,
  quantityEng,
}) {
  useEffect(() => {
    if (concentrationEng > 0 && needsPlant > 0) {
      quantityEng(concentrationEng / needsPlant);
    }
  }, [concentrationEng, needsPlant, quantityEng]);
}
