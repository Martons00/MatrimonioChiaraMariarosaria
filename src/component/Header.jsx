import React from "react";
import "./css/Header.css";

export default function Header() {
  const handleGalleriaClick = () => {
    window.open(
      "https://photos.app.goo.gl/tjT5LUJDTbk2SyTk8",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__titleGroup">
          <h1 className="header__title">Davide Carozza</h1>
          <h2 className="header__subtitle">Photography</h2>
        </div>

        <div className="header__buttonWrap">
          <button className="header__button" onClick={handleGalleriaClick}>
            <span>GALLERIA</span>
          </button>
        </div>
      </div>
    </header>
  );
}