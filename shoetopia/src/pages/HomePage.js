import React from 'react';

import "./HomePage.scss";

import NavBar from "../common/NavBar";
import HomepageBanner from '../common/HomepageBanner';
import ShoeCarousel from '../common/ShoeCarousel';
import requests from '../requests'
import FeatureBanner from '../common/FeatureBanner';

const HomePage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HomepageBanner></HomepageBanner>
      <ShoeCarousel
        title="BasketBall"
        fetchUrl={requests.fetchProducts('limit=10')}
      ></ShoeCarousel>
      <FeatureBanner
      title="Air Force 1"
        fetchUrl={requests.fetchFeatured}
      ></FeatureBanner>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      {/* body */}
      {/* footer */}
    </div>
  )
}

export default HomePage