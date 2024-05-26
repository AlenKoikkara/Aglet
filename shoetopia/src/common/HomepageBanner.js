import React from "react";

import "./HomepageBanner.scss";
import FeaturedCarousel from "./FeaturedCarousel";

const HomepageBanner = () => {
  return (
    <header className="bannerHeader">
      <div className="content">
        <div className="title1">find the</div>
        <div className="title2">Perfect <span style={{color: '#F07635'}}>shoe.</span></div>
        <div className="desc">
          Step into a world where every shoe has a story and every sole has a
          goal, to make you smile! So, kick off your old kicks and join the
          fun.
        </div>
        <div className="bannerButtons">
          <div className="menbutton">mens</div>
          <div className="womenbutton">womens</div>
        </div>
      </div>
      <FeaturedCarousel></FeaturedCarousel>
    </header>
  );
};

export default HomepageBanner;
