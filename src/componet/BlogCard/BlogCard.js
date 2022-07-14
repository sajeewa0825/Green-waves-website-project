import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";



const BlogCard = () => {
  return (
    <div className="container blogSet ">
      <div className="row Blogtopic">
        <h2>Our Latest Blog</h2>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="BlogContent col-4 col-md-6">
          <Link  to={"/blog"} className="acls">
            <div className="Blogcard bcard1"></div>

            <div className="Blogtittle">
              <h5>Protect the fluttering insects </h5>
            </div>
            <div className="Bloglorem   ">
              {/* <p className="justify-content-center">
                At Green waves, we work day in and day out to save our vital
                pollinators.But we need help from concerned people like you.
              </p> */}
            </div>
          </Link >
        </div>

        <div className="BlogContent col-4 col-md-2">
          <Link  to={"/blog"} className="acls">
            <div className="Blogcard bcard2"></div>

            <div className="Blogtittle">
              <h5>Learning From Ecologies Of Care </h5>
            </div>
            {/* <div className="Bloglorem">
              <p>
                One of important lesson should be that transforming our
                relationship with the natural world may be our best bet for
                safeguarding our future.
              </p>
            </div> */}
          </Link >
        </div>

        <div className="BlogContent col-4 col-md-2">
          <Link  to={"/blog"} className="acls">
            <div className="Blogcard bcard3"></div>

            <div className="Blogtittle">
              <h5>Importance of Pollinators </h5>
            </div>
            {/* <div className="Bloglorem">
              <p>
                monarchs that are making the great migration to warmer climates
                are the great grandchildern of the ones who previously made the
                long journey!
              </p>
            </div> */}
          </Link >
        </div>

        <div className="BlogContent col-4 col-md-2">
          <Link  to={"/blog"} className="acls">
            <div className="Blogcard bcard4"></div>

            <div className="Blogtittle">
              <h5>Creation of an eco-friendly environment</h5>
            </div>
            {/* <div className="Bloglorem">
              <p>
                Instead of traveling in Link  way that affects the environment,
                choose green tourism
              </p>
            </div> */}
          </Link >
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
