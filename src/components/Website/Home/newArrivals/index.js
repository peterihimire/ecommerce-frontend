import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import ProductCard from "../../../ui/productCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const NewArrival = () => {
  const features = [
    {
      id: "01",
      title: "App Integration",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faHeadphones} className={`feature-icon`} />,
    },
    {
      id: "02",
      title: "Color Schemes",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faBolt} className={`feature-icon`} />,
    },
    {
      id: "03",
      title: "High Resolution",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faFingerprint} className={`feature-icon`} />,
    },
    {
      id: "04",
      title: "Drag and Drop",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faLock} className={`feature-icon`} />,
    },
    {
      id: "05",
      title: "App Integration",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faHeadphones} className={`feature-icon`} />,
    },
    {
      id: "06",
      title: "Color Schemes",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faBolt} className={`feature-icon`} />,
    },
    {
      id: "07",
      title: "High Resolution",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faFingerprint} className={`feature-icon`} />,
    },
    {
      id: "08",
      title: "Drag and Drop",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faLock} className={`feature-icon`} />,
    },
  ];

  return (
    <section className={`new-product`}>
      <div className="wrapper">
        <div className={`new-head`}>
          <h3>New Arrivals</h3>
        </div>

        <div className={`new-wrapper`}>
          {features.map((feature, index) => {
            return (
              <SwiperSlide>
                <ProductCard
                  title={feature.title}
                  content={feature.exerpt}
                  id={feature.id}
                  icon={feature.icon}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
