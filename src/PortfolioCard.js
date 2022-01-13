import React from "react";
import PortfolioModal from "./PortfolioModal";

function PortfolioCard(props) {
  const { target, source, altText } = props;
  const title = [
    "LOG CABIN",
    "TASTY CAKE",
    "CIRCUS TENT",
    "CONTROLLER",
    "LOCKED SAFE",
    "SUBMARINE",
  ];
  return (
    <>
      <div className="col-md-6 col-lg-4 mb-5">
        <div
          className="portfolio-item mx-auto"
          data-bs-toggle="modal"
          data-bs-target={`#portfolioModal${target}`}
        >
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={source} alt={altText} />
        </div>
      </div>
      <PortfolioModal
        portfolioId={target}
        title={title[target - 1]}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam
                  nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae?
                  Reprehenderit soluta, eos quod consequuntur itaque. Nam."
        source={source}
        alt={altText}
      />
    </>
  );
}

export default PortfolioCard;
