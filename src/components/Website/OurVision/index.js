import React from "react";
import SmallHero from "../../ui/smallHero";
import WhyChoose from "./whyChoose";

import { Helmet } from "react-helmet";

const VisionPage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>About Us | Our Vision - Benkih</title>
      </Helmet>

      <SmallHero title={`Our Vision`} />
      <WhyChoose />
    </div>
  );
};

export default VisionPage;
