import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import FeatureCard from "../../../ui/featureCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

const WhyChoose = () => {
  const pagination = {
    el: ".custom-pag",
    clickable: true,
    renderBullet: function (index, className) {
      // return '<span class="' + className + '">' + "</span>";
      return `<span class="'  ${className} '">  </span>`;
    },
  };

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
      title: "Mobile Responsive",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faMicrochip} className={`feature-icon`} />,
    },
  ];

  return (
    <section className={`why-chose`}>
      <div className="wrapper">
        <div className={`choose-head`}>
          <h6>Enjoy best in class features</h6>
          <h3>Our Best Features</h3>
          <p>
            Learning day desirous informed expenses material returned six the.
            She enabled invited exposed him another. Reasonably conviction
            solicitude me mr at discretion reasonable. Age out full gate bed day
            lose.
          </p>
        </div>
        <Swiper
          breakpoints={{
            200: { slidesPerView: 1 },
            500: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            2500: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          slidesPerView={3}
          pagination={pagination}
          className={"wrappe"}
          loop
          autoHeight={true}
          centeredSlides={false}
          speed={3000}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          // }}
        >
          {features.map((feature, index) => {
            return (
              <SwiperSlide>
                <FeatureCard
                  title={feature.title}
                  content={feature.exerpt}
                  id={feature.id}
                  icon={feature.icon}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={`custom-pag`}></div>
      </div>
    </section>
  );
};

export default WhyChoose;
