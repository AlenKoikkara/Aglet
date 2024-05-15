import React from "react";

import "./HomepageBanner.scss";

import bannerimg from "../assets/images/bannershoe.png";
import ColorWarp from "./ColorWarp";

const HomepageBanner = () => {
  return (
    <header className="bannerHeader">
      <div className="content">
        <div className="title">Find the Perfect Shoe.</div>
        <div className="desc">
          {" "}
          Step into a world where every shoe has a story, and every sole has a
          goal – to make you smile! So, kick off your old kicks and join the
          fun.
        </div>
      </div>
      <img className="bannerimg" src={bannerimg} alt="bannerimg"></img>
      <ColorWarp className="colorwarp" width={800} lines={10}></ColorWarp>
      <div className="bannerButtons">
        <div className="menbutton">Mens</div>
        <div className="womenbutton">Womens</div>
      </div>
    </header>
  );
};

export default HomepageBanner;
