import React from "react";
import "./css/HomePage.css";
import heroImage from "../assets/photo_01.jpg";
import BlurText from "./BlurText";
import Header from "./Header";
import Footer from "./Footer";

export default function HomePage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="homepage__overlay" />

      <Header />

      <div className="homepage__content">
        <BlurText
          text="Benvenuto nella galleria digitale"
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="homepage__title"
        />
      </div>

      <Footer />
    </div>
  );
}