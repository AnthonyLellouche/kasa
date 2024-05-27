import React from "react";
import Navigation from "../components/Navigation";
import "./../styles/components/pageNotFound.css"

const NotFound = () => {
  return (
    <div>
      <Navigation />
      <div className="pageNotFound">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/#">Retourner sur la page d'accueil</a>
      </div>
    </div>
  );
};

export default NotFound;
