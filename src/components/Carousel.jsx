import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default ({ list = [], interval = 2000, transitionTime = 1500 }) => (
  <Carousel
    autoPlay
    infiniteLoop
    stopOnHover
    interval={interval}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    transitionTime={transitionTime}
  >
    {list.map((ig, idx) => (
      <div key={idx}>
        <img src={ig.src} alt={ig.alt} />
      </div>
    ))}
  </Carousel>
);
