import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

const FeatureCard = ({ id, image, title, content, icon }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <div
      // data-aos="zoom-in"
      className={`feature-card`}
      key={id}
    >
      <div className={`num-icon`}>
        <h3>{id}</h3>
        {icon}
        {/* <img src={image} alt="" className="gloss-icon" /> */}
      </div>

      <h5>{title}</h5>

      <p>{content}</p>
      <div className={`button-div`}>
        <button onClick={() => console.log("Hello")} className={`read-more`}>
          VIEW DETAIL
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
