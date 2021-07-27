import React from "react";

export default function About() {
  return (
    <div>
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section_subtitle section__subtitle--about">
          junior developer
        </p>

        <div className="about-me__body">
          <p>
            Experienced controls software design engineer pivoting career
            towards web development. Looking for web development opportunities -
            front, back, full-stack developer roles. Recently graduated with
            Master's in Software Engineering and Intelligent Systems from
            University of Alberta. I also have a Bachelor in Computer
            Engineering with Honours from the University of Toronto.
          </p>
        </div>

        <img src="img/devtal.jpg" alt="Me" className="about-me__img" />
      </section>
    </div>
  );
}
