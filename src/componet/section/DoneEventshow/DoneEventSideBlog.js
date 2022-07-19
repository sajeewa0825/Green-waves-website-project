import React from "react";
import "./doneEventShow.css";
import { Link } from "react-router-dom";
import ImgBee from "./pic/image-01.jpg";
import ImgEcologies from "./pic/image-02.jpg";
import ImgButterfly from "./pic/image-03.jpg";
import ImgShip from "./pic/image-04.jpg";

const doneEventSideBlog = () => {
  return (
    <div>
      <h3 className="doneEventShow_Title">Blogs</h3>
      <div className="blog_Posts">
        <img
          src={ImgBee}
          className="me-2"
          alt=""
          width={"120px"}
          height={"100px"}
        />

        <span className="blog_postsText">
          <span className="blog_postsTextHeading">Bees</span>
          <hr className="blog_postsTextHeading_HRule" />
          The sad fact that is pollinators are disappearing before our
          eyes-especially honeybees and bumble bees.
          <Link className="blog_postsTextReadMore" to="/blog">
            Read more..
          </Link>
        </span>
      </div>
      <div className="blog_Posts">
        <img
          src={ImgEcologies}
          className="me-2"
          alt=""
          width={"120px"}
          height={"100px"}
        />

        <span className="blog_postsText">
          <span className="blog_postsTextHeading">Ecologies</span>
          <hr className="blog_postsTextHeading_HRule" />
          The COVID-19 pandemic has seemingly brought the world to a standstill.
          <Link className="blog_postsTextReadMore" to="/blog">
            Read more..
          </Link>
        </span>
      </div>
      <div className="blog_Posts">
        <img
          src={ImgButterfly}
          className="me-2"
          alt=""
          width={"120px"}
          height={"100px"}
        />

        <span className="blog_postsText">
          <span className="blog_postsTextHeading">Butterflies</span>
          <hr className="blog_postsTextHeading_HRule" />
          They are easy to pictures-one of the most recognizable butterflies on
          Earth.
          <Link className="blog_postsTextReadMore" to="/blog">
            Read more..
          </Link>
        </span>
      </div>
      <div className="blog_Posts">
        <img
          src={ImgShip}
          className="me-2"
          alt=""
          width={"120px"}
          height={"100px"}
        />

        <span className="blog_postsText">
          <span className="blog_postsTextHeading">Cruise Ships</span>
          <hr className="blog_postsTextHeading_HRule" />
          Taking a cruise is appealing for many because of the way they are
          marketed.
          <Link className="blog_postsTextReadMore" to="/blog">
            Read more..
          </Link>
        </span>
      </div>
      <ul className="blog_Posts_Li">
        <li>
          <i class="bi bi-facebook"></i>
        </li>
        <li>
          <i class="bi bi-instagram"></i>
        </li>
        <li>
          <i class="bi bi-youtube"></i>
        </li>
      </ul>
    </div>
  );
};

export default doneEventSideBlog;
