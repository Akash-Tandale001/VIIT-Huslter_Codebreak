import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img
    src="https://source.unsplash.com/random"
    style={{ width: "100%", height: "320px", objectFit: "cover" }}
    alt="..."
    onDragStart={handleDragStart}
  />,
  <img
    src="https://source.unsplash.com/random"
    style={{ width: "100%", height: "320px", objectFit: "cover" }}
    alt="..."
    onDragStart={handleDragStart}
  />,
  <img
    src="https://source.unsplash.com/random"
    style={{ width: "100%", height: "320px", objectFit: "cover" }}
    alt="..."
    onDragStart={handleDragStart}
  />,
  <img
    src="https://source.unsplash.com/random"
    style={{ width: "100%", height: "320px", objectFit: "cover" }}
    alt="..."
    onDragStart={handleDragStart}
  />,
  <img
    src="https://source.unsplash.com/random"
    style={{ width: "100%", height: "320px", objectFit: "cover" }}
    alt="..."
    onDragStart={handleDragStart}
  />,
];

const HeroCarausel = () => {
  return (
    <div style={{ width: "100%", height: "350px", objectFit: "cover" }}>
      <AliceCarousel
        infinite
        disableDotsControls
        mouseTracking={true}
        autoPlay
        autoPlayInterval="2000"
        items={items}
        disableButtonsControls
        touchTracking
      />
    </div>
  );
};

export default HeroCarausel;
