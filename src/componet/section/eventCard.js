import React from "react";
import Place from "../section/image/SVG/map.svg";
import clock from "../section/image/SVG/icon-clock.svg";
import Calendar from "../section/image/SVG/clander.svg";

const eventCard = () => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-md-center">
        <div class="col">
          <div class="card h-100 bg-light border-light">
            <img
              src={Place}
              class="card-img-top"
              alt="..."
              width={50}
              height={50}
              style={{ marginTop: 5 }}
            />
            <div class="card-body text-center">
              <h4 class="card-title">Place</h4>
              <small class="text-muted">
                <h5>UWU</h5>
              </small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 bg-light border-light">
            <img
              src={clock}
              class="card-img-top"
              alt="..."
              width={50}
              height={50}
              style={{ marginTop: 5 }}
            />
            <div class="card-body text-center">
              <h4 class="card-title">Time</h4>
              <small class="text-muted">
                <h5>10:00 AM</h5>
              </small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 bg-light border-light">
            <img
              src={Calendar}
              class="card-img-top"
              alt="..."
              width={50}
              height={50}
              style={{ marginTop: 5 }}
            />
            <div class="card-body text-center">
              <h4 class="card-title">Date</h4>
              <small class="text-muted">
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
