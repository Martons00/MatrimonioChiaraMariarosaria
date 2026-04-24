import React from "react";
import "./css/HomePage.css";
import heroImage from "../assets/photo_00.jpg";

export default function HomePage() {
  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="homepage__overlay" />

      <div className="homepage__content">
        <h1 className="homepage__title">Benvenuto nella tua homepage</h1>
        <p className="homepage__subtitle">
          Qui puoi inserire una frase di presentazione o una breve descrizione.
        </p>

        <div className="homepage__actions">
          <button className="homepage__button homepage__button--primary">
            Inizia ora
          </button>
          <button className="homepage__button homepage__button--secondary">
            Scopri di più
          </button>
        </div>
      </div>
    </div>
  );
}