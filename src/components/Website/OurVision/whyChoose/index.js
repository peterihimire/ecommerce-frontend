import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { CheckBox } from "@mui/icons-material";
import FeatureCard from "../../../ui/productCard";

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
      icon: <CheckBox />,
    },
    {
      id: "02",
      title: "Color Schemes",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <CheckBox />,
    },
    {
      id: "03",
      title: "High Resolution",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <CheckBox />,
    },
    {
      id: "04",
      title: "Drag and Drop",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <CheckBox />,
    },
    {
      id: "05",
      title: "Mobile Responsive",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <CheckBox />,
    },
  ];

  return (
    <section className={`why`}>
      <div className="wrapper">
        <div className={`choose-head`}>
          <h3>Our Features</h3>
          <p>
            Learning day desirous informed expenses material returned six the.
            She enabled invited exposed him another. Reasonably conviction
            solicitude me mr at discretion reasonable. Age out full gate bed day
            lose.
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          pagination={pagination}
          className={"wrappe"}
          loop
          autoHeight={true}
          // centeredSlides={false}
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
