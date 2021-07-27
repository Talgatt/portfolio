import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      {/* My Work */}
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My work</h2>
        <p className="section__subtitle section__subtitle--work">
          A selection of my projects
        </p>
        <div className="portfolio">
          {/* <!-- Portfolio item 01 --> */}
          <Link to="/ppmtool">
            <img src="img/ppmtool.jpeg" alt="" className="portfolio__img" />
          </Link>

          {/* <!-- Portfolio item 02 --> */}

          <Link to="/github_users">
            <img
              src="img/github-users.png"
              alt="github users"
              className="portfolio__img"
            />
          </Link>
          <Link to="/careshare">
            <img
              src="img/care-share1.jpg"
              alt="care share"
              className="portfolio__img"
            />
          </Link>
          <Link to="/ecommerce">
            <img
              src="img/ecomm1.jpeg"
              alt="e-commerce"
              className="portfolio__img"
            />
          </Link>
          <Link to="/awsimageupload">
            <img
              src="img/aws-image-upload.jpg"
              alt="aws"
              className="portfolio__img"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
