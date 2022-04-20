import React from 'react';
import './Team.css';




function Hostel (props) {
    return(
        <>
      
   
        <div className='cards'>
            <div className='card'>
                <img src = {props.img} alt='pic1' className='card_img' />
                <div className='card_info'>
                    <span className='card_category'>{props.name}</span>
                    <h3 className='card_title'> {props.course}</h3>
               
                </div>
            </div>
        </div>
       
        </>
    );
}

export default Hostel ;