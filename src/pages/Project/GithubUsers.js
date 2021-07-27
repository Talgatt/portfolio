import React from "react";

export default function GithubUsers() {
  return (
    <div>
      {/* <!--Introduction--> */}
      <section className="intro">
        <h1 className="section__title section__title--intro">
          Search
          <strong>
            Github Users <br />
          </strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          junior developer
        </p>
        <img
          src="img/github-users-login.png"
          alt="portfolio"
          className="intro__img"
        />
      </section>

      <div className="portfolio-item-individual">
        <p>
          This web application is a tool to search github users. <br />
          <br />
          <strong> Technologies used:</strong> <br />
          - React / Redux, CSS <br />
        </p>
        <img src="img/github-users.jpg" alt="" />
        <br />

        <div className="access-projects">
          <a
            href="https://search-github-users-netlify.netlify.app/login"
            className="btn live"
          >
            Live
          </a>
          <a href="#work" className="btn github">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
