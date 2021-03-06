import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import About from './About';
import Home from './Home';
import './Nav.css';


function Nav() {
    return (
   <>
     <div className='NavBar'>
     <br />
        <NavLink  exact to="/" aria-current="page" > Home </NavLink>
        <NavLink exact to="/about" aria-current="page"> About </NavLink>
        <NavLink  exact to="/team" aria-current="page" > Team </NavLink>
        <NavLink exact to="/hostels" aria-current="page"> Hostels </NavLink>
      

     </div>
   </>
    );
  }
  
  export default Nav;