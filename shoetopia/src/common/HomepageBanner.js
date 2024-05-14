import React from 'react'

import './HomepageBanner.scss';

import bannerimg from '../assets/images/bannershoe.png'

const HomepageBanner = () => {
  
  return (
    <header className='bannerHeader'>
      <div className='content'>
        <div className='title'>Find the Perfect Shoe.</div>
        <div className='desc'> Step into a world where every shoe has a story, and every sole has a goal – to make you smile! So, kick off your old kicks and join the fun.</div>
      </div>
      <img className='bannerimg' src={bannerimg} alt='bannerimg'></img>
      <div className='bannerButtons'>
        <div className='menbutton'>Mens</div>
        <div className='womenbutton'>Womens</div>
      </div>
    </header>
  )
}

export default HomepageBanner