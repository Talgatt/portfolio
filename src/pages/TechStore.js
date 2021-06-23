import React from "react";

export default function TechStore() {
  return (
    <div>
      {/* <!--Introduction--> */}
      <section className="intro">
        <h1 className="section__title section__title--intro">
          E-commerce
          <strong>
            <br />
          </strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Full-Stack Developer
        </p>
        <img src="img/ecomm1.jpeg" alt="portfolio" className="intro__img" />
      </section>

      <div className="portfolio-item-individual">
        <p>
          E-commerce website
          <br /> <br />
          <br />
          <strong> Technologies used:</strong> <br />
          - React / Redux, CSS <br />- Node.js <br /> - MongoDB
        </p>
        <img src="img/ecomm2.png" alt="" />
        <br />

        <div className="access-projects">
          <a
            href="https://tech-store-vintage.netlify.app/"
            className="btn live"
          >
            Live
          </a>

          <a
            href="https://github.com/Talgatt/tech-store"
            className="btn github"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
