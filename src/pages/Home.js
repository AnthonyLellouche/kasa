import React from "react";
import Navigation from "../components/Navigation";
import banner from "../assets/images/Image-source-1.png";
import "../styles/pages/home.css";
import info from "../info.json";

const Home = () => {
  return (
    <div>
      <Navigation />
      <section class="banner">
        <img src={banner} alt="banniere representant une plage" />
        <div class="banner-text">
          <h1>
            Chez vous, <span class="break-line">partout et ailleurs</span>
          </h1>
        </div>
      </section>
      <main>
        <section id="logements" className="logements">
          <article className="logements-cards">
            {info.map((logement) => (
              <div className="card" key={logement.id}>
                <a href={`./page${logement.id}.html`}>
                  <img src={logement.cover} alt={logement.title} />
                  <div className="logements-container">
                    <h2>
                      {logement.title}
                    </h2>
                  </div>
                </a>
              </div>
            ))}
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
