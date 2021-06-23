import React from "react";

export default function PPMToolFullStack() {
  return (
    <div>
      {/* <!--Introduction--> */}
      <section className="intro">
        <h1 className="section__title section__title--intro">
          <strong>AWS Image Upload</strong> <br /> application
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          junior developer
        </p>
        <img
          src="img/ppm-tool-login.png"
          alt="portfolio"
          className="intro__img"
        />
      </section>

      <div className="portfolio-item-individual">
        <p>
          This app allows to store any files on Amazon S3.
          <br />
          Technologies used: <br />
          - React / Redux, CSS <br /> Spring Boot <br /> AWS S3 service
        </p>
        <img src="img/care-share1.jpg" alt="" />
        <br />

        <div className="access-projects">
          <a href="#work" className="btn live">
            Live
          </a>

          <a href="https://github.com/Talgatt/careshare" className="btn github">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
