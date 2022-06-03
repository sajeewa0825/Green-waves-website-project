import React from "react";
import "./doneEvent.css";
import Im1 from "./image/forest1.jpg";
import reportWebVitals from "./../../reportWebVitals";

const donEvent = () => {
  return (
    <div>
      <h1>Events</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div class="blog-card1">
              <div class="meta">
                <div class="photo1"></div>
                <ul class="details">
                  <li class="date">Aug. 24, 2015</li>
                </ul>
              </div>
              <div class="description">
                <h1>Learning to Code</h1>
                <h2>Opening a door to the future</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  eum dolorum architecto obcaecati enim dicta praesentium, quam
                  nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
                </p>
                <p class="read-more">
                  <a href="#">Read More...</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div class="blog-card1 alt">
              <div class="meta">
                <div class="photo2"></div>
                <ul class="details">
                  <li class="date">July. 15, 2015</li>
                </ul>
              </div>
              <div class="description">
                <h1>Mastering the Language</h1>
                <h2>Java is not the same as JavaScript</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  eum dolorum architecto obcaecati enim dicta praesentium, quam
                  nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
                </p>
                <p class="read-more">
                  <a href="#">Read More...</a>
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
