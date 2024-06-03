import React from "react";
import { Link } from "react-router-dom";

import banner from "../assets/images/banner-home.png";

import "../styles/pages/home.scss";

import info from "../info.json";

const Home = () => {
  return (
    <div className="container-home">
      <section className="banner">
        <img src={banner} alt="banniere representant une plage" />
        <div className="banner-text">
          <h1>
            Chez vous, <span className="break-line">partout et ailleurs</span>
          </h1>
        </div>
      </section>
      <main>
        <section id="logements" className="logements">
          <article className="logements-cards">
            {info.map((logement) => (
              <div className="card" key={logement.id}>
                <Link to={`/fiche/${logement.id}`}>
                  <img src={logement.cover} alt={logement.title} />
                  <div className="logements-container">
                    <h2>{logement.title}</h2>
                  </div>
                </Link>
              </div>
            ))}
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
