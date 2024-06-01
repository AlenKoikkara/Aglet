import React from 'react'
import './UserPage.scss';
import NavBar from '../common/NavBar';
import UserProfile from '../common/UserProfile';
import Footer from '../common/Footer';

export const UserPage = () => {
  return (
    <div className='body'>
      <NavBar></NavBar>
      <UserProfile></UserProfile>
      <Footer></Footer>
    </div>
  )
}

export default UserPage