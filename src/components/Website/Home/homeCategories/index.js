import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

import "./styles.scss";

const HomeCategories = () => {
  return (
    <section className={`home-categories`}>
      <div className="wrapper">
        <div className={`categories-wrapper`}>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>Men</h4>
              <button>Shop Now</button>
            </div>
          </div>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>Women</h4>
              <button>Shop Now</button>
            </div>
          </div>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>hats</h4>
              <button>Shop Now</button>
            </div>
          </div>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>Unisex</h4>
              <button>Shop Now</button>
            </div>
          </div>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>hats</h4>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
