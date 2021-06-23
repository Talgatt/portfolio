import React from "react";

export default function Skills() {
  return (
    <div>
      {/* <!--My services--> */}
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">Skills</h2>
        <div className="services">
          <div className="service">
            <h3>Languages</h3>

            <p>
              Java <br />
              <i class="fab fa-java"></i>
            </p>
            <p>
              Javascript <br />
              <i class="fab fa-js"></i>
            </p>

            <p>
              CSS <br />
              <i class="fab fa-css3-alt"></i>
            </p>
            <p>C++</p>
            <p>SQL</p>
          </div>
          <br />
          {/* <!-- / service--> */}

          <div className="service">
            <h3>Frameworks</h3>
            <p>Spring Boot</p>
            <p>Spring Security</p>
            <p>React / Redux</p>
            <p>Express</p>
          </div>
          <br />
          {/* <!-- / service--> */}

          <div className="service">
            <h3>Tools</h3>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
            <p>
              Docker <br />
              <i class="fab fa-docker"></i>
            </p>
            <p>
              GIT <br />
              <i class="fab fa-git-alt"></i>
            </p>
          </div>
          {/* <!-- / service--> */}
        </div>
        {/* <!-- / services--> */}

        <a href="#work" className="btn">
          My Work
        </a>
      </section>
    </div>
  );
}
