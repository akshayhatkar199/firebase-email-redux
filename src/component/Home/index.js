import React from 'react'
import {Link } from "react-router-dom";
import { Anchor,Button, Drawer } from 'antd';
import './home.css'
// const { Link } = Anchor;

const Home = () => {
  return (
    <div className='container-fluid'>
        <div className='header'>
       
    <div className='mobileHidden'>
    <div className='header-menu'>
    <Link to="/login" className='text-menu'> <h3 >Home</h3></Link>
    <Link to="/login" className='text-menu'><h3>About</h3></Link>
    <Link to="/Sendemail" className='text-menu'><h3>Email</h3></Link>
    <Link to="/Sendemail" className='text-menu'><h3>Events</h3></Link>
    <Link to="/login" className='text-menu'><h3>login</h3></Link>
   
    {/* <Link href={'/login'}><h2>Home</h2></Link> */}
  </div>
  </div>
  </div>
  </div>
  )
}

export default Home