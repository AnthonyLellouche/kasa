/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import info from "../info.json";

import "../styles/pages/fiche.scss";

import NotFound from "./NotFound";

import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

import arrowLeff from "../assets/fonts/arrow-left.png";
import arrowRight from "../assets/fonts/arrow-right.png";

const Fiche = () => {
  const { id } = useParams();
  const logement = info.find((item) => item.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <NotFound />;
  }

  const pictures = logement.pictures;

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <section className="fiche">
        <div id="banner">
          <img
            className="banner-img"
            src={pictures[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
          {pictures.length > 1 && (
            <><div>
              <button className="arrow arrow_left" onClick={goToPreviousImage}>
                <img src={arrowLeff} alt="Fleche de gauche" />
              </button>
              <button className="arrow arrow_right" onClick={goToNextImage}>
                <img src={arrowRight} alt="Fleche de droite" />
              </button>
            </div><div className="dots">
                {`${currentImageIndex + 1}/${pictures.length}`}
              </div></>
        )}
        </div>

        <section className="first-container">
          <div className="container-title">
            <h1 className="title">{logement.title}</h1>
            <p className="subtitle">{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <button key={index} className="tag">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="container-landlord">
            <div className="landlord">
              <div className="name">
                {logement.host.name.split(" ").map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    <br />
                  </React.Fragment>
                ))}
              </div>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className="rating">
              <Rating rating={parseInt(logement.rating, 10)} />
            </div>
          </div>
        </section>
        <section className="second-container">
          <div className="container-description">
            <Collapse label="Description" className="collapse custom-collapse">
              <div>{logement.description}</div>
            </Collapse>
            <Collapse label="Équipements" className="collapse custom-collapse">
              <ul className="equipements-list">
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Fiche;
