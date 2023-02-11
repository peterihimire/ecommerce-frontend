import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

import "./styles.scss";

const BuildingModern = () => {
  return (
    <section className={`building-modern`}>
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <div className={`left-top`}>
              <h6>Quality at its best</h6>
              <h4>
                We're Building Modern <br />
                And High Software
              </h4>
              <p>
                Both rest of know draw fond post as. It agreement defective to
                excellent. Feebly do engage of narrow. Extensive repulsive
                belonging depending if promotion be zealously as. Preference
                inquietude ask now are dispatched led appearance. Small meant in
                so doubt hopes.
              </p>
              <ul className="check-container">
                <li className="check-completed">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#2568ef" }}
                    />
                  </span>
                  Chapter too parties its letters
                </li>
                <li className="check-completed">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#2568ef" }}
                    />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
                <li className="check-completed">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#2568ef" }}
                    />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
                <li className="check-completed">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#2568ef" }}
                    />
                  </span>
                  Conveying or northward offending admitting
                </li>
              </ul>
            </div>
          </div>
          <div className={`right`}>
            <div className={`built-grid`}>
              <div className={`grid-item1`}>
                <div className={`icon-container`}>
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{ color: "#2568ef", fontSize: "30px" }}
                  />
                </div>

                <h5>Ticket Manager</h5>
                <p>
                  Downs those still witty an balls so chief so. Moment an little
                  .
                </p>
              </div>
              <div className={`grid-item2`}>
                <div className={`icon-container`}>
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{ color: "#2568ef", fontSize: "30px" }}
                  />
                </div>

                <h5>Live Messaging</h5>
                <p>
                  Downs those still witty an balls so chief so. Moment an little
                  .
                </p>
              </div>
              <div className={`grid-item3`}>
                <div className={`icon-container`}>
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{ color: "#2568ef", fontSize: "30px" }}
                  />
                </div>
                <h5>Email Workflow</h5>
                <p>
                  Downs those still witty an balls so chief so. Moment an little
                  .
                </p>
              </div>
              <div className={`grid-item4`}>
                <div className={`icon-container`}>
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{ color: "#2568ef", fontSize: "30px" }}
                  />
                </div>
                <h5>File Upload</h5>
                <p>
                  Downs those still witty an balls so chief so. Moment an little
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingModern;
