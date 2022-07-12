import React from "react";
import "./doneEvent.css";
import { Link } from "react-router-dom";

const donEvent = () => {
  return (
    <div>
      <div className="container">
        <h1 className="eventsHeading">Our previous events</h1>
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
                <h2>Garbage collection</h2>
                <p>
                  Garbage collection and recycle-To facilitate the conservation
                  of natural resources for our future generations we as green
                  waves.Green waves Waste Management Services provide municipal,
                  industrial,
                </p>
                <p className="read-more">
                  <Link to={"/doneEventShow"}>Read More...</Link>
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
                <h2>Held Seminars</h2>
                <p>
                  Seminars-held as a medium by which there could be a free
                  exchange of information on rapid action environment protection
                  systems used in munition production operations.Seminars-held
                  as a medium by which there could be a free exchange
                </p>
                <p className="read-more">
                  <Link to={"/Semina"}>Read More...</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="blog-card1">
              <div className="meta">
                <div className="photo3"></div>
                <ul className="details">
                  <li className="date">Aug. 24, 2015</li>
                </ul>
              </div>
              <div className="description">
                <h2>Distributing Leaflets</h2>
                <p>
                  Distributing Leaflets-Environmental conservation is a practice
                  that paves the way for protecting the environment and natural
                  resources on the individual, organizational as well as
                  governmental levels.
                </p>
                <p className="read-more">
                  <Link to={"/leaflets"}>Read More...</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog-card1 alt">
              <div className="meta">
                <div className="photo4"></div>
                <ul className="details">
                  <li className="date">July. 15, 2015</li>
                </ul>
              </div>
              <div className="description">
                <h2>Sustainable products</h2>
                <p>
                  Sell sustainable products-As awareness of the climate crisis
                  has grown, the number of consumers wanting to buy sustainable
                  and ethical products has been increasing steadily over recent
                  years,
                </p>
                <p className="read-more">
                  <Link to={"/sellSus"}>Read More...</Link>
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
