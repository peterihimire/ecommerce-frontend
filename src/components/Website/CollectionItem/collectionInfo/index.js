import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { CheckBox } from "@mui/icons-material";
import FeatureCard from "../../../ui/productCard";
import product10 from "../../../../assets/images/product10.png";

import "./styles.scss";

const CollectionInfo = () => {
  return (
    <section className={`collection-info`}>
      <div className="wrapper">
        <div className={`collection-details`}>
          <div className={`detail-img`}>
            <img src={product10} alt="" />
          </div>
          <div className={`detail-txt`}>
            <h1>Rayban Sunshade</h1>
            <p>
              This is one of the best brands of sun shades you can buy in this
              era. Very cool to the eyes and is also stylish, with great
              untimely designs.This is one of the best brands of sun shades you
              can buy in this era. Very cool to the eyes and is also stylish,
              with great untimely designs.
            </p>
            <h4>$20.00</h4>
            <div>
              <div>color</div>
              <div>Size</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionInfo;
