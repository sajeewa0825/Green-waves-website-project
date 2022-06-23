import React from "react";
import "./doneEvent.css";

const donEvent = () => {
  return (
    <div>
      <h1>Events</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="blog-card1">
              <div className="meta">
                <div className="photo1"></div>
                <ul className="details">
                  <li className="date">Aug. 24, 2015</li>
                </ul>
              </div>
              <div className="description">
                <h1>Learning to Code</h1>
                <h2>Opening a door to the future</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  eum dolorum architecto obcaecati enim dicta praesentium, quam
                  nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
                </p>
                <p className="read-more">
                  <a href="# ">Read More...</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog-card1 alt">
              <div className="meta">
                <div className="photo2"></div>
                <ul className="details">
                  <li className="date">July. 15, 2015</li>
                </ul>
              </div>
              <div className="description">
                <h1>Mastering the Language</h1>
                <h2>Java is not the same as JavaScript</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  eum dolorum architecto obcaecati enim dicta praesentium, quam
                  nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
                </p>
                <p className="read-more">
                  <a href="# ">Read More...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default donEvent;
