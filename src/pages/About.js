import React from "react";

import Collapse from "../components/Collapse";

import banner from "../assets/images/kalen-about.png";

import "./../styles/pages/about.scss";

const About = () => {
  return (
    <div className="faq">
      <section className="banner">
        <img src={banner} alt="banniere representant une montagne" />
      </section>
      <section className="collapse-container">
        <Collapse label="Fiabilité" className="collapse custom-collapse-about">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <br />
        <Collapse label="Respect" className="collapse custom-collapse-about">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <br />
        <Collapse label="Service" className="collapse custom-collapse-about">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <br />
        <Collapse label="Sécurité" className="collapse custom-collapse-about">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </section>
    </div>
  );
};

export default About;
