import React, { useEffect, useRef, useState } from "react";

import "./HomePage.scss";

import NavBar from "../common/NavBar";
import HomepageBanner from "../common/HomepageBanner";
import ShoeCarousel from "../common/ShoeCarousel";
import requests from "../requests";
import FeatureBanner from "../common/FeatureBanner";
import Footer from "../common/Footer";

const HomePage = () => {
  const targetElement = useRef();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsInView(entry.isIntersecting);
    }, {});
    observer.observe(targetElement.current);

    return () => observer.unobserve(targetElement.current);
  }, [isInView]);

  return (
    <div>
      <NavBar></NavBar>
      <HomepageBanner></HomepageBanner>
      <div ref={targetElement}>
        <ShoeCarousel
          title="BasketBall"
          fetchUrl={requests?.fetchProducts(
            "limit=10&subCategory=Basketball&category=Shoes"
          )}
        ></ShoeCarousel>
      </div>
      {isInView && (
        <FeatureBanner
          title="Air Force 1"
          fetchUrl={requests?.fetchFeatured}
        ></FeatureBanner>
      )}
      <ShoeCarousel
        title="Air Max"
        fetchUrl={requests?.fetchProducts(
          "limit=10&productName=Nike Air Max Dn"
        )}
      ></ShoeCarousel>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
