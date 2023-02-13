import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

import "./styles.scss";

const HomeBrands = () => {
  return (
    <section className={`home-brands`}>
      <div className="wrapper">
        <div className={`featured-head`}>
          <h3>Shop by Brands</h3>
        </div>
        <div className={`brands-wrapper`}>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>Men</h4>
              <button className="btn-block btn-small">Shop Now</button>
            </div>
          </div>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>Women</h4>
              <button className="btn-block btn-small">Shop Now</button>
            </div>
          </div>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>hats</h4>
              <button className="btn-block btn-small">Shop Now</button>
            </div>
          </div>
     
        </div>
      </div>
    </section>
  );
};

export default HomeBrands;
