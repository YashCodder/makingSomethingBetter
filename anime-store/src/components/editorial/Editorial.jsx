import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./style.css";

const collections = [
  {
    title: "OVERSIZED T-SHIRTS",
    image:
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=1200&auto=format&fit=crop",
    link: "/collections/oversized",
  },
  {
    title: "REGULAR T-SHIRTS",
    image:
      "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=1200&auto=format&fit=crop",
    link: "/collections/regular",
  },
  {
    title: "HOODIES",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop",
    link: "/collections/hoodies",
  },
  {
    title: "ANIME CALENDAR",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1200&auto=format&fit=crop",
    link: "/collections/calendar",
  },
];

const Collections = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="collections-section">

      {/* Header */}
      <div className="collections-header">

        <div className="collections-arrows">
          <button onClick={scrollLeft}>
            <FiChevronLeft />
          </button>

          <button onClick={scrollRight}>
            <FiChevronRight />
          </button>
        </div>

        <h2>SHOP BY COLLECTIONS</h2>
      </div>

      {/* Slider */}
      <div className="collections-slider" ref={sliderRef}>

        {collections.map((item, index) => (
          <div className="collection-card" key={index}>

            <img src={item.image} alt={item.title} />

            {/* Category Button */}
            <Link to={item.link} className="collection-btn">
              {item.title} <FiArrowUpRight />
            </Link>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Collections;