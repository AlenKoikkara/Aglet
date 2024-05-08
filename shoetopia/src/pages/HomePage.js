import React from 'react';

import "./HomePage.scss";

import NavBar from "../common/NavBar";
import HomepageBanner from '../common/HomepageBanner';
import ShoeCarousel from '../common/ShoeCarousel';
import requests from '../requests'

const HomePage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HomepageBanner></HomepageBanner>
      <ShoeCarousel
        title="BasketBall"
        fetchUrl={requests.fetchProducts('limit=10')}
      ></ShoeCarousel>
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