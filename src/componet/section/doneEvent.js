import React from "react";
import Image from "./image/p2.jpg";

const donEvent = () => {
  return (
    <div>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img src={Image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <div class="collapse" id="collapseExample1">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </p>
                <a
                  class="btn btn--with-icon"
                  data-bs-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample1"
                >
                  <i class="btn-icon fa fa-long-arrow-right"></i>READ MORE
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={Image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <div class="collapse" id="collapseExample2">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </p>
                <a
                  class="btn btn--with-icon"
                  data-bs-toggle="collapse"
                  href="#collapseExample2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i class="btn-icon fa fa-long-arrow-right"></i>READ MORE
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={Image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                  <div class="collapse" id="collapseExample3">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </p>
                <a
                  class="btn btn--with-icon"
                  data-bs-toggle="collapse"
                  href="#collapseExample3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample3"
                >
                  <i class="btn-icon fa fa-long-arrow-right"></i>READ MORE
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={Image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <div class="collapse" id="collapseExample">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </p>
                <a
                  class="btn btn--with-icon"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i class="btn-icon fa fa-long-arrow-right"></i>READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default donEvent;
