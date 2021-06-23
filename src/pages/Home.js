import React from "react";

export default function Home() {
  return (
    <div>
      {/* Introduction */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Talgat Tulegenov</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          junior developer
        </p>
        <img src="img/devtal.jpg" alt="Me" className="intro__img" />
      </section>
    </div>
  );
}
