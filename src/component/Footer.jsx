import React from "react";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <div className="footer__date">27.06.26</div>
        </div>

        <div className="footer__center">
          <div className="footer__line1">Chiara</div>
          <div className="footer__line2">Maria Rosaria</div>
        </div>

        <div className="footer__right">
          <img
            src="https://www.villaminieri.it/wp-content/uploads/2023/08/Villa-Minieri-logo-nero.webp"
            alt="Sticky header logo"
            className="footer__logo"
          />
        </div>
      </div>
    </footer>
  );
}