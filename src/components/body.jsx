import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "./Carousel";

const img_url_prefix = val =>
  `https://res.cloudinary.com/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/${val}.jpg`;

export default () => {
  const list = [
    "23705be6-c8ac-457f-8801-14a8b641ba87",
    "c822cf40-a73c-4b6b-8bb1-7013ea32de19"
  ].map((k, i) => ({ src: img_url_prefix(k), alt: `ss${i + 1}` }));

  return (
    <div className="slider" style={{ marginTop: "62.5px" }}>
      <Carousel list={list} transitionTime={500} />
    </div>
  );
};
