import React from "react";
import SmallHero from "../../ui/smallHero";
import WhyChoose from "./whyChoose";
import WeAre from "./weAre";
import GrowFast from "./growFast";
import { Helmet } from "react-helmet";

const WhoPage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>About Us | Who We Are - Benkih</title>
      </Helmet>

      <SmallHero title={`Who We Are`} />
      <WhyChoose />
      <WeAre />
      <GrowFast />
    </div>
  );
};

export default WhoPage;
