import React from "react";
import Img_1 from "../image/susProduct.webp";
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
              <h1 className="doneEventShow_Title">Sell sustainable products</h1>
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
                        <i class="bi bi-calendar-week-fill fs-4 "></i> January
                        01,2022
                      </div>
                      <div className="col-sm">
                        <i class="bi bi-geo-alt-fill fs-4 "></i>Badulla
                      </div>
                      <div className="col-sm">
                        <i class="bi bi-clock-fill fs-4  "></i>9.00 a.m onward
                      </div>
                    </div>
                  </p>

                  <p class="card-text">
                    Sell sustainable products-As awareness of the climate crisis
                    has grown, the number of consumers wanting to buy
                    sustainable and ethical products has been increasing
                    steadily over recent years, with 65% of people preferring to
                    buy from a purpose-driven, sustainable brand,
                  </p>
                  <p class="card-text">
                    we as green waves sell sustainable products such as reusable
                    bags, reusable straws, eco-friendly fashion accessories,
                    naturally creative kids production, Eco-friendly products
                    for pets... etc...
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
