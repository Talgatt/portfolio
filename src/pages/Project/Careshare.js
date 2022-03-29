import React from "react";

export default function Careshare() {
  return (
    <div>
      {/* <!--Introduction--> */}
      <section className="intro">
        <h1 className="section__title section__title--intro">
          Careshare
          <strong>
            <br />
          </strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">engineer</p>
        <img
          src="img/ppm-tool-login.png"
          alt="portfolio"
          className="intro__img"
        />
      </section>

      <div className="portfolio-item-individual">
        <p>
          A student from a certain university can register in the application.
          After a successful registration, the user will see a homepage and all{" "}
          <br />
          other users that are registered. The user will be able to see the
          image of other parent, name, number of children, contact information,{" "}
          <br />
          whether he/she is open to accept care or not, and whether she/he is
          looking for care for their children. <br /> <br />
          <br />
          Technologies used: <br />
          - React / Redux, CSS <br />- Node.js <br /> - MongoDB
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
