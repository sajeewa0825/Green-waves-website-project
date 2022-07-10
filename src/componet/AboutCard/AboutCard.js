import React from "react";
import "./AboutCard.css";

const AboutCard = () => {
  return (
    <div>
      <div class="container aboutCardContainer">
        <div class="row">
          <div class="col">
            <div className="aboutcard"></div>
          </div>
          <div class="col aboutContent">
            <div>
              <p>About us</p>
              <div className="blacklineAbout"></div>
            </div>
            <div className="aboutTopic">
              <h1>
                “If we love the environment,the environment will protect us”
              </h1>
            </div>
            <div className="aboutP">
              <p>
                Coinciding with the World Environment Day which commenced on 05
                th june 1972, we are here to address issues affecting the global
                environment globally and to address environmental protection
                issues.we have developed this as a platform to raise awareness
                about the issues facing our environment such as air pollution,
                illegal wildlife trade, sustainable consumption, sea level rise
                and food security.
              </p>
            </div>
            <div>
              <button type="button" class="btn btn-success AboutCard-ReadBtn">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
