import React from "react";
import "./AboutCard.css";
import { Link } from "react-router-dom";

const AboutCard = () => {
  return (
    <div>
      <div class="container aboutCardContainerHomePage">
        <div class="row">
          <div class="col">
            <div className="aboutcardHomePage"></div>
          </div>
          <div class="col aboutContentHomePage">
            <div>
              <p>About us</p>
              <div className="blacklineAboutHomePage"></div>
            </div>
            <div className="aboutTopicHomePage">
              <h1>
                “If we love the environment,the environment will protect us”
              </h1>
            </div>
            <div className="aboutPHomePage">
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
              <Link to={"/about"}>
                <button type="button" class="btn btn-success AboutCard-ReadBtn">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
