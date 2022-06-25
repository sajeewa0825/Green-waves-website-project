import React from "react";
import Img_1 from "./image/e1.jpg";
import "./doneEventShow.css";
import { Link } from "react-router-dom";
import CoverImg from "./image/Cover.jpg";

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
            <i class="bi bi-arrow-left-short"></i>home
          </Link>
        </span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row doneEventShow_works">
              <h1 className="doneEventShow_Title">Garbage collection</h1>
              <div class="doneEventShow_card ">
                <img
                  src={Img_1}
                  class="card-img-top pt-2 doneEventShow_Image"
                  alt="..."
                />
                <div class="card-body">
                  <p className="text-muted">
                    <i class="bi bi-calendar-week-fill fs-4 me-2"></i> May
                    15,2022
                  </p>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    Sint consequat occaecat Lorem laboris voluptate labore duis
                    minim ut consequat nostrud laboris incididunt ullamco. Et
                    exercitation minim commodo enim exercitation reprehenderit
                    Lorem duis ea labore esse aute enim. Laborum nisi officia
                    cupidatat voluptate eu ad commodo amet voluptate ullamco
                    sunt duis exercitation sit. Pariatur ea Lorem duis sint aute
                    sunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h3 className="doneEventShow_TitleH3">Blogs</h3>
            <div className="blog_Posts">
              <img
                src="https://dummyimage.com/100x100/7be385/000000"
                className="me-2"
                alt=""
              />

              <span className="blog_postsText">
                <span className="blog_postsTextHeading">Bees</span>
                <hr className="blog_postsTextHeading_HRule" />
                Eiusmod veniam cillum qui adipisicing anim veniam mollit aute
                exercitation nulla sit commodo.
                <Link className="blog_postsTextReadMore" to={"#"}>
                  Read more..
                </Link>
              </span>
            </div>
            <div className="blog_Posts">
              <img
                src="https://dummyimage.com/100x100/7be385/000000"
                className="me-2"
                alt=""
              />

              <span className="blog_postsText">
                <span className="blog_postsTextHeading">Bees</span>
                <hr className="blog_postsTextHeading_HRule" />
                Eiusmod veniam cillum qui adipisicing anim veniam mollit aute
                exercitation nulla sit commodo.
                <Link className="blog_postsTextReadMore" to={"#"}>
                  Read more..
                </Link>
              </span>
            </div>
            <div className="blog_Posts">
              <img
                src="https://dummyimage.com/100x100/7be385/000000"
                className="me-2"
                alt=""
              />

              <span className="blog_postsText">
                <span className="blog_postsTextHeading">Bees</span>
                <hr className="blog_postsTextHeading_HRule" />
                Eiusmod veniam cillum qui adipisicing anim veniam mollit aute
                exercitation nulla sit commodo.
                <Link className="blog_postsTextReadMore" to={"#"}>
                  Read more..
                </Link>
              </span>
            </div>
            <div className="blog_Posts">
              <img
                src="https://dummyimage.com/100x100/7be385/000000"
                className="me-2"
                alt=""
              />

              <span className="blog_postsText">
                <span className="blog_postsTextHeading">Bees</span>
                <hr className="blog_postsTextHeading_HRule" />
                Eiusmod veniam cillum qui adipisicing anim veniam mollit aute
                exercitation nulla sit commodo.
                <Link className="blog_postsTextReadMore" to={"#"}>
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
        </div>
      </div>
    </div>
  );
};

export default doneEventShow;
