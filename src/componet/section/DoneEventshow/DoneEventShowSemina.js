import React from "react";
import Img_1 from "../image/semina.jpg";
import "./doneEventShow.css";
import { Link } from "react-router-dom";
import CoverImg from "../image/Cover.jpg";
import DoneEventSideBlog from "./DoneEventSideBlog";

const doneEventShow = () => {
  return (
    <div>
      <div className="col-12">
        <img src={CoverImg} class="img-fluid doneEventShow_Img" alt="" />
        <h1 className="doneEventShow_Heading">
          Our Works
          <hr className="doneEventShow_Heading_Hr" />
        </h1>
        <span className="doneEventShow_Back">
          <Link to="/Time" className="blog_postsTextReadMore">
            <i class="bi bi-arrow-left-short"></i>Back
          </Link>
        </span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row doneEventShow_works">
              <h1 className="doneEventShow_Title">Held Seminars</h1>
              <div class="doneEventShow_card ">
                <img
                  src={Img_1}
                  class="card-img-top pt-2 doneEventShow_Image"
                  alt="..."
                />
                <div class="card-body">
                  <p className="text-muted">
                    <div className="row">
                      <div className="col-sm">
                        <i class="bi bi-calendar-week-fill fs-4 "></i> May
                        15,2022
                      </div>
                      <div className="col-sm">
                        <i class="bi bi-geo-alt-fill fs-4 "></i>Colombo
                      </div>
                      <div className="col-sm">
                        <i class="bi bi-clock-fill fs-4  "></i>10.00 a.m
                      </div>
                    </div>
                  </p>

                  <p class="card-text">
                    Seminars-held as a medium by which there could be a free
                    exchange of information on rapid action environment
                    protection systems used in munition production operations.
                  </p>
                  <p class="card-text">
                    Seminars-held as a medium by which there could be a free
                    exchange of information on rapid action environment
                    protection systems used in munition production operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <DoneEventSideBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default doneEventShow;
