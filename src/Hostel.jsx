import React from 'react';
import './Hostel.css';
import { Switch ,Route } from 'react-router-dom';
import Campushostel from './Campushostel';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Hostel (props) {
    return(
        <>
      
        <Link to = '/Campushostel'>
        <div className='hcards'>
            <div className='hcard'>
                <img src = {props.img} alt='pic1' className='hcard_img' />
                <div className='hcard_info'>
                    <span className='hcard_category'>{props.name}</span>
                    <h3 className='hcard_title'> {props.price} </h3>
                   
                </div>
            </div>
        </div>
        </Link>
       

       
        </>
    );
} 


 
export default Hostel ;