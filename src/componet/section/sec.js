import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sec.css";
import Timer from "../Time_c/timer";
import EventCard from "./eventCard";
import DoneEvent from "./doneEvent";

function App() {
  return (
    <div>
      <div className="container">
        <p className="Event_subHeading pt-2">OUR EVENTS</p>
        <h1 className="Event_Heading">Up Comming Event</h1>
        <div className="row">
          <div className="col-12">
            <article className="blog-card">
              <div className="blog-card__background">
                <div className="card__background--wrapper">
                  <div className="card__background--main">
                    <div className="card__background--layer"></div>
                  </div>
                </div>
              </div>
              <div className="blog-card__head">
                <span className="date__box">
                  <span className="date__day">31</span>
                  <span className="date__month">AUG</span>
                </span>
              </div>
              <div className="blog-card__info">
                <h4 class="fw-bold">PLANTING CAMPAINGE</h4>
                <p>
                  "A tree is the best friend of man on earth." When we use trees
                  respectfully and economically, we have one of the greatest
                  resources on earth. Trees are rightfully called the 'lungs of
                  the earth.' Life on earth would cease to exist in the absence
                  of trees.
                </p>
                <p>
                  Our planting campaign is carried out in three main ways. There
                  are, Map the world’s terrestrial and aquatic ecosystems and
                  create an inventory of the species contained in each of them
                  and the ecosystem service they provide; Locate the protect the
                  endangered ecosystems and species, with emphasis on protecting
                  plant biodiversity and ecosystem services; Seek to restore as
                  many degraded ecosystems as possible
                </p>
                <div className="container justify-content-center">
                  <div className="row justify-content-md-center">
                    <div className="col-lg-9">
                      <EventCard />
                    </div>
                    <div className="col-lg-4">
                      <Timer />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <br />

      <DoneEvent />
    </div>
  );
}
export default App;
