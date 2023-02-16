import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img
    src='images/img-19.jpg'
    style={{ width: "100%", height: "600px", objectFit: "cover" }}
    alt="..."
    onDragStart={handleDragStart}
  />,
  <img
    src='images/img-17.jpg'
    style={{ width: "100%", height: "600px", objectFit: "cover" }}
    alt="..."
    onDragStart={handleDragStart}
  />,
  <img
    src='images/img-14.png'
    style={{ width: "100%", height: "600px", objectFit: "cover" }}
    alt="..."
    onDragStart={handleDragStart}
  />,
  <img
    src='images/img-18.jpg'
    style={{ width: "100%", height: "600px", objectFit: "cover" }}
    alt="..."
    onDragStart={handleDragStart}
  />,
  <img
    src='images/img-21.jpg'
    style={{ width: "100%", height: "600px", objectFit: "cover" }}
    alt="..."
    onDragStart={handleDragStart}
  />,
];

const HeroCarausel = () => {
  return (
    <div style={{ width: "100%", height: "620px", objectFit: "cover" }}>
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
