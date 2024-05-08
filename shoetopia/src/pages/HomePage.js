import React from 'react';

import "./HomePage.css";

import NavBar from "../common/NavBar";
import HomepageBanner from '../common/HomepageBanner';
import MovieCarousel from '../common/MovieCarousel';
import requests from '../requests'

const HomePage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HomepageBanner></HomepageBanner>
      <MovieCarousel
        title="BasketBall"
        fetchUrl={requests.fetchProducts}
      ></MovieCarousel>
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