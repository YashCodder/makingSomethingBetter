import React, { useEffect, useState } from "react";
import "./style.css";

const Hero = () => {
  const [active, setActive] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1974&auto=format&fit=crop",
  ];

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {/* Horizontal Slider */}
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {slides.map((img, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <span className="hero-tag">LIMITED DROP 2026</span>

        <h1>
          Curated Anime <br />
          Luxury Essentials
        </h1>

        <p>Premium merchandise for the modern otaku.</p>

        <button className="btn-primary">
          Explore Collection
        </button>

        <div className="indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${active === index ? "active-dot" : ""}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>

    </section>
  );
};

export default Hero;