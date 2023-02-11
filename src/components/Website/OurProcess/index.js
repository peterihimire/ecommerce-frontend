import React from "react";
import SmallHero from "../../ui/smallHero";
import WhyChoose from "./whyChoose";
import OurProcess from "./ourProcess";
import MapTalent from "./mapTalent";
import { Helmet } from "react-helmet";

const ProcessPage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>Our Process - Benkih</title>
      </Helmet>

     
      <SmallHero title={`Our Process`} />
      <OurProcess />
      <WhyChoose />
      <MapTalent />
    
    </div>
  );
};

export default ProcessPage;
