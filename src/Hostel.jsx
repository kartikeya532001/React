import React from 'react';
import './Hostel.css';


const mar = {
    marginLeft:'130px',
}

function Hostel (props) {
    return(
        <>
      
   {/* <a href=''> */}
        <div className='hcards'>
            <div className='hcard'>
                <img src = {props.img} alt='pic1' className='hcard_img' />
                <div className='hcard_info'>
                    <span className='hcard_category'>{props.name}</span>
                    <h3 className='hcard_title'> {props.price} 
                    <span style={mar}>{props.Distance}</span> </h3>
             
                </div>
            </div>
        </div>
        {/* </a> */}
        </>
    );
} 

export default Hostel ;