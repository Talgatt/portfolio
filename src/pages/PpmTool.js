import React from "react";

export default function PpmTool() {
  return (
    <div>
      {/* <!--Introduction--> */}
      <section className="intro">
        <h1 className="section__title section__title--intro">
          Personal
          <strong>
            Project Management <br />
            Tool
          </strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">engineer</p>
        <img
          // /Users/talgattulegenov/MERN/portfolio/src/img/ppm-tool-login.png
          src="img/ppm-tool-login.png"
          alt="portfolio"
          className="intro__img"
        />
      </section>

      <div className="portfolio-item-individual">
        <p>
          This web application is a Personal Project Management Tool. <br />
          <br />
          <strong> Technologies used:</strong> <br />
          React / Redux, CSS <br /> Spring boot / Spring Security <br />
          MySQL
        </p>
        <img src="../img/ppmtool.jpeg" alt="" />
        <br />

        <div className="access-projects">
          <a href="#work" className="btn live">
            Live
          </a>

          <a href="https://github.com/Talgatt/PPMTool" className="btn github">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
