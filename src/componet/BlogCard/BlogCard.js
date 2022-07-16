import React from "react";
import "./BlogCard.css";

const BlogCard = () => {
  return (
    <div className="container blogSet">
      <div className="row Blogtopic">
        <h2>Our Latest Blog</h2>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="BlogContent col-4 col-md-6">
          <a href="#" className="acls">
            <div className="Blogcard bcard1"></div>

            <div className="Blogtittle">
              <h5>Protect the fluttering insects </h5>
            </div>
            <div className="Bloglorem">
              <p>
                At Green waves, we work day in and day out to save our vital
                pollinators.But we need help from concerned people like you.
              </p>
            </div>
          </a>
        </div>

        <div className="BlogContent col-4 col-md-2">
          <a href="#" className="acls">
            <div className="Blogcard bcard2"></div>

            <div className="Blogtittle">
              <h5>Learning From Ecologies Of Care </h5>
            </div>
            <div className="Bloglorem">
              <p>
                One of important lesson should be that transforming our
                relationship with the natural world may be our best bet for
                safeguarding our future.
              </p>
            </div>
          </a>
        </div>

        <div className="BlogContent col-4 col-md-2">
          <a href="#" className="acls">
            <div className="Blogcard bcard3"></div>

            <div className="Blogtittle">
              <h5>Importance of Pollinators </h5>
            </div>
            <div className="Bloglorem">
              <p>
                monarchs that are making the great migration to warmer climates
                are the great grandchildern of the ones who previously made the
                long journey!
              </p>
            </div>
          </a>
        </div>

        <div className="BlogContent col-4 col-md-2">
          <a href="#" className="acls">
            <div className="Blogcard bcard4"></div>

            <div className="Blogtittle">
              <h5>Creation of an eco-friendly environment</h5>
            </div>
            <div className="Bloglorem">
              <p>
                Instead of traveling in a way that affects the environment,
                choose green tourism
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
