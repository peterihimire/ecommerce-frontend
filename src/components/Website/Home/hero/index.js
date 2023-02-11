import React, { useCallback } from "react";
// import heroImg from "../../../../assets/images/software-landing-2.png";
import heroImg from "../../../../assets/images/product7.png";
import { Link } from "react-router-dom";

import "./styles.scss";

const Hero = () => {
  return (
    <section className={`hero-header`}>
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <h1>
              Homemade <br />
              Fresh<span> BURGER</span> <br />
              100% Natural.
            </h1>

            <p>
              Celebrated delightful an especially increasing instrument am.
              Indulgence contrasted sufficient to unpleasant in in insensible
              favourable.
            </p>

            <div className={`get-started`}>
              {/* <button className="btn-primary  btn-medium">Get Started</button> */}
              <button className="btn-primary  btn-medium indicator">
                Shop now
              </button>
            </div>
          </div>
          <div className={`rightt`}>
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
