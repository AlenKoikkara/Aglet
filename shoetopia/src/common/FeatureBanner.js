import React from "react";
import "./FeatureBanner.scss";
import video from "../assets/videos/feature.mp4";

function FeatureBanner({ title }) {
 
  return (
    <div className="featureBannerWrapper" >
        <div>
          <video autoPlay={true} muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <div className="content">
            <div className="title">{title}</div>
            <div className="desc">For any and every look</div>
            <div className="buttons">
              <div className="mens">Shop Mens</div>
              <div className="womens">Shop Womens</div>
              <div className="kids">Shop Kids</div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default FeatureBanner;
