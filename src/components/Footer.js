import React from "react";

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="footer">
        <a href="mailto:talgat@ualberta.ca" className="footer__link">
          talgat@ualberta.ca <br />
          +1 778 512 1506
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link" href="https://github.com/Talgatt">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
