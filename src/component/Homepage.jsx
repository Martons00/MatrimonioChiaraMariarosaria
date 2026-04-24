import React from "react";
import "./css/HomePage.css";
import heroImage from "../assets/photo_00.jpg";
import BlurText from "./BlurText";

export default function HomePage() {

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="homepage__overlay" />

      <div className="homepage__content">
        <BlurText
  text="Benvenuto nella tua homepage"
  delay={200}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
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