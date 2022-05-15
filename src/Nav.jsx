import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


function Nav() {
    return (
   <>
     <div className='NavBar'>
     <br />
     {/* <NavLink to="" component={}> */}
        <a href='#home'>Home</a>
        <a href='#about'>About Us</a>
        <a href='#team'>Team</a>
        <a href='#hostel'>Hostels</a>
        {/* <a href='#contact'>Contact Us</a> */}

     </div>
   </>
    );
  }
  
  export default Nav;