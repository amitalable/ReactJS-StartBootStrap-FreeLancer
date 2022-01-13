import React from "react";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">
          <PortfolioCard
            target="1"
            source="assets/img/portfolio/cabin.png"
            altText="Cabin"
          />
          <PortfolioCard
            target="2"
            source="assets/img/portfolio/cake.png"
            altText="Cake"
          />
          <PortfolioCard
            target="3"
            source="assets/img/portfolio/circus.png"
            altText="Circus"
          />
          <PortfolioCard
            target="4"
            source="assets/img/portfolio/game.png"
            altText="Game"
          />
          <PortfolioCard
            target="5"
            source="assets/img/portfolio/safe.png"
            altText="Safe"
          />
          <PortfolioCard
            target="6"
            source="assets/img/portfolio/submarine.png"
            altText="Submarine"
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
