import React from "react";

import "./HomePage.scss";

import NavBar from "../common/NavBar";
import HomepageBanner from "../common/HomepageBanner";
import ShoeCarousel from "../common/ShoeCarousel";
import requests from "../requests";
import FeatureBanner from "../common/FeatureBanner";
import Footer from "../common/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HomepageBanner></HomepageBanner>
      <ShoeCarousel
        title="BasketBall"
        fetchUrl={requests.fetchProducts(
          "limit=10&subCategory=Basketball&category=Shoes"
        )}
      ></ShoeCarousel>
      <FeatureBanner
        title="Air Force 1"
        fetchUrl={requests.fetchFeatured}
      ></FeatureBanner>
      <ShoeCarousel
        title="Air Max"
        fetchUrl={requests.fetchProducts(
          "limit=10&productName=Nike Air Max Dn"
        )}
      ></ShoeCarousel>
      {/* body */}
      {/* footer */}
      <Footer></Footer>
      {/* <ColorWarp></ColorWarp> */}
    </div>
  );
};

export default HomePage;
