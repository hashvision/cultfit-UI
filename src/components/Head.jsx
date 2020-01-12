import React from "react";
import Carousel from "./Carousel";
import "./../styles/menu.css";

const img_url_prefix = val =>
  `https://res.cloudinary.com/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/${val}.jpg`;

const list = [
  "23705be6-c8ac-457f-8801-14a8b641ba87",
  "c822cf40-a73c-4b6b-8bb1-7013ea32de19"
].map((k, i) => ({ src: img_url_prefix(k), alt: `ss${i + 1}` }));

export default () => {
  return (
    <>
      <div className="head">
        <div className="head-left">
          <img src="assets/curefit.svg" alt="cult" className="main-logo" />
        </div>
      </div>
      <div className="slider" style={{ marginTop: "62.5px" }}>
        <Carousel list={list} transitionTime={500} />
      </div>
    </>
  );
};
