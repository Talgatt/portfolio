import React from "react";

export default function AwsImageUpload() {
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
          src="img/aws-image-upload.jpg"
          alt="portfolio"
          className="intro__img"
        />
      </section>

      <div className="portfolio-item-individual">
        <p>
          This app allows to store any files on Amazon S3.
          <br />
          <br />
          <strong>Technologies used: </strong>
          <br />
          - React / Redux <br />- Spring Boot <br />- AWS S3 service
        </p>
        {/* <img src="img/aws-image-upload.jpg" alt="" /> */}
        {/* <p>This app allows to store any files on Amazon S3.</p>
        <ul>
          <li> React / Redux</li>
          <li>Spring Boot</li>
          <li>AWS S3 service</li>
        </ul> */}

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
