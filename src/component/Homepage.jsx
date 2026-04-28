import React from "react";
import "./css/HomePage.css";
import heroImage from "../assets/photo_03.jpg";
import Header from "./Header";
import Footer from "./Footer";
import BlurText from "./BlurText";


export default function HomePage() {
  const handleGalleryClick = () => {
    window.open(
      "https://photos.app.goo.gl/tjT5LUJDTbk2SyTk8",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="homepage__overlay" />

      <Header />

      <div className="homepage__content">
        <div className="homepage__box">
          <div style={{marginBottom: "15px"}}>
          <BlurText
            text="Entra nella galleria digitale"
            delay={300}
            animateBy="words"
            direction="top"
            className="homepage__title"
          />
          </div>
        {/* <h1 className="homepage__title">Entra nella galleria digitale</h1> */}
        <button
          type="button"
          className="homepage__button"
          onClick={handleGalleryClick}
        >
          Esplora ora
        </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}