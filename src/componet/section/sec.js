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
                <h4>PLANTING CAMPAINGE</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque vero libero voluptatibus earum? Alias dignissimos
                  quo cum, nulla esse facere atque, blanditiis doloribus at sunt
                  quas, repellendus vel? Et, hic!
                </p>
                <p>
                  Quis eu labore esse aliquip ad magna est irure. Do eiusmod
                  dolor laborum ullamco ad in. Qui sunt minim id adipisicing
                  amet quis enim pariatur. Labore ut sunt incididunt sit
                  incididunt cupidatat tempor sit eiusmod reprehenderit.
                  Excepteur elit est do esse commodo reprehenderit amet tempor
                  irure deserunt culpa consectetur. Fugiat tempor sunt labore
                  minim consectetur Lorem ea mollit id ullamco.
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
