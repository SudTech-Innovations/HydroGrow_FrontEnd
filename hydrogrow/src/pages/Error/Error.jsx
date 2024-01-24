import React from "react";

import "./Error.css";

export default function Error() {
  return (
    <div id="error">
      <h1>Erreur 404</h1>
      <p>La page demandée n'existe pas.</p>
      <a href="/" className="link">
        Retour à l'accueil
      </a>
    </div>
  );
}
