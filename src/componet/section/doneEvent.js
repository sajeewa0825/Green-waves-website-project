import React from "react";
import "./doneEvent.css";
import Im1 from "./image/forest.jpg";

const donEvent = () => {
  return (
    <div>
      <header>
        <div class="curve">
          <h1>Our Previous Campaings</h1>
        </div>
      </header>

      {/* event card create */}
      <br />
      <div class="card mb-3" style={{ marginLeft: "3px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={Im1} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style={{ marginLeft: "3px" }}>
        <div class="row g-0">
          <div class="col-md-5">
            <img src={Im1} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style={{ marginLeft: "3px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={Im1} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default donEvent;
