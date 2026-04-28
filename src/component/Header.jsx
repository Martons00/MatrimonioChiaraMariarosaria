import React from "react";
import "./css/Header.css";

export default function Header() {

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__titleGroup">
          <h1 className="header__title">Davide Carozza</h1>
          <h2 className="header__subtitle">Photography</h2>
        </div>
      </div>
    </header>
  );
}