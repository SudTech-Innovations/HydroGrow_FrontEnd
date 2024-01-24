import React from "react";

export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <p>Copyrigth © 2023 - {currentYear} SudTech-Innovation</p>
    </div>
  );
}
