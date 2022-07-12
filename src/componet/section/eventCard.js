import React from "react";
import Place from "../section/image/SVG/map.svg";
import clock from "../section/image/SVG/icon-clock.svg";
import Calendar from "../section/image/SVG/clander.svg";
import "./eventCard.css";

const eventCard = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-md-center">
        <div className="col">
          <div className="card h-100 bg-light border-light">
            <img
              src={Place}
              className="card-img-top"
              alt="..."
              width={50}
              height={50}
              style={{ marginTop: 5 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title">PLACE</h4>
              <small className="text-muted">
                <h5>UWU</h5>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-light border-light">
            <img
              src={clock}
              className="card-img-top"
              alt="..."
              width={50}
              height={50}
              style={{ marginTop: 5 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title">TIME</h4>
              <small className="text-muted">
                <h5>10:00 AM</h5>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-light border-light">
            <img
              src={Calendar}
              className="card-img-top"
              alt="..."
              width={50}
              height={50}
              style={{ marginTop: 5 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title">DATE</h4>
              <small className="text-muted">
                <h5>August 31</h5>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default eventCard;
