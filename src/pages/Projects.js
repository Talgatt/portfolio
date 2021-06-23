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
          <Link to="/project1">
            <img src="img/ppmtool.jpeg" alt="" className="portfolio__img" />
          </Link>

          {/* <!-- Portfolio item 02 --> */}

          <Link to="/project2">
            <img
              src="img/github-users.png"
              alt="Not Working"
              className="portfolio__img"
            />
          </Link>
          <Link to="/careshare">
            <img
              src="img/care-share1.jpg"
              alt="Not Working"
              className="portfolio__img"
            />
          </Link>
          <Link to="/ecommerce">
            <img
              src="img/ecomm1.jpeg"
              alt="Not Working"
              className="portfolio__img"
            />
          </Link>
          <Link to="/techstore">
            <img
              src="img/ecomm1.jpeg"
              alt="Not Working"
              className="portfolio__img"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
