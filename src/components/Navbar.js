import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [navOpened, setNavOpened] = useState(false);

  const handleBurgerClick = () => {
    setNavOpened(!navOpened);
  };

  return (
    <div className={navOpened ? "nav-open" : ""}>
      <header>
        <button
          className={"nav-toggle "}
          aria-label="toggle navigation"
          onClick={handleBurgerClick}
        >
          <span className="hamburger"></span>
        </button>
        <nav className="nav" onClick={handleBurgerClick}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/#home" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item nav-open">
              <Link to="/#services" className="nav__link">
                Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/#about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/#work" className="nav__link">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
