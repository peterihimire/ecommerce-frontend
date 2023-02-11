import React from "react";
import HomeHero from "./hero";
import WhyChoose from "./whyChoose";
import BuildingModern from "./buildingModern";
import Reviews from "./reviews";
import { Helmet } from "react-helmet";

import "./styles.scss";

const HomePage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>Home - Benkih</title>
      </Helmet>

      <HomeHero />
      <BuildingModern />
      <WhyChoose />
      <Reviews />
    </div>
  );
};

export default HomePage;
