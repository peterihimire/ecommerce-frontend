import React from "react";
import ProcessCard from "../../../ui/processCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

import "./styles.scss";

const OurProcess = () => {
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
      icon: <FontAwesomeIcon icon={faBolt} className={`process-icon`} />,
    },
    {
      id: "03",
      title: "High Resolution",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faFingerprint} className={`process-icon`} />,
    },
    {
      id: "04",
      title: "Drag and Drop",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faLock} className={`process-icon`} />,
    },
    {
      id: "05",
      title: "Mobile Responsive",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faMicrochip} className={`process-icon`} />,
    },
    {
      id: "06",
      title: "Mobile Responsive",
      exerpt:
        "Learning day desirous informed expenses material returned six the.",
      icon: <FontAwesomeIcon icon={faAddressBook} className={`process-icon`} />,
    },
  ];
  return (
    <section className={`ourProcess`}>
      <div className="wrapper">
        <div className={`container`}>
          {features.map((feature, index) => {
            return (
              <ProcessCard
                title={feature.title}
                content={feature.exerpt}
                id={feature.id}
                icon={feature.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
