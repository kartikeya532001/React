import React from 'react';
import './Hostelc.css';
import './Hostel.css';
import Forms from './Forms';
import Footer1 from './Footer1';
import Nav1 from './Nav1';
import { Link } from 'react-router-dom';

function Zenith() {
    return (
        <>
            <Nav1 />
            <div className='Main'>
                <div className='dis'>
                    <div className='img'>
                        <img src='/img/4.jpeg' alt='pic1' className='img1' />
                    </div>
                    <div className='image'>
                        <img src='/img/3.jpeg' alt='pic1' className='img2' />
                        <div className='image2'>
                            <img src='/img/2.jpeg' alt='pic1' className='img2' />
                        </div>

                    </div>
                    <div className='prices'>
                        <div>
                            
                                <div className='hcard1'>
                                    <h1> Prices </h1>
                                    <p>
                                        <br /> Triple Sharing Room with <br/> Common Washroom: 1,350,000/- <br />
                                        <br /> Triple Sharing Room with <br/> Attached Washroom: 1,50,000/- <br />
                                        <br /> Triple Sharing AC Room with <br/> Attached Washroom: 1,70,000/-<br />
                                    </p>
                                   
                                    <Link to='/BookF' ><button className='btn'>Book Now</button> </Link>
                                      
                                </div>
                            
                        </div>
                        <div className='map'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.8288998855583!2d77.96897231493796!3d30.412595981749803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d48979bd5417%3A0xccaff1efd39379cd!2sBoys%20hostel%20Near%20UPES%20Dehradun!5e0!3m2!1sen!2sin!4v1652688430718!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div className='policies'>
                    <h1> Zenith </h1>
                    <h3> Sai Mandir, Bidholi,Dehradun,Uttarakhand 248001</h3>
                    <p> Rating: ⭐⭐⭐⭐</p>
                </div>
                <div className='ContactDetails'>

                    <div className='mf'>
                        <div className='abo'>
                            <div className='f1'>
                                <h2> Facilities</h2>
                                <ul>
                                    <li> Food</li>
                                    <li> GYM</li>
                                    <li> Badminton Court</li>
                                    <li> Football Court</li>
                                </ul>
                                <h2> Rating </h2>
                                <ul type='none'>
                                    <li>Food: ⭐⭐⭐</li>
                                    <li>Infrastructure: ⭐⭐⭐</li>
                                    <li>Hygiene: ⭐⭐⭐</li>
                                </ul>
                            </div>
                            <div className='f2'>
                                <ul>
                                    <li> Basketball Court</li>
                                    <li> Laundary</li>
                                    <li> Wifi </li>
                                </ul>

                                <ul className='mar' type='none'>
                                    <li> GYM: ⭐⭐⭐</li>
                                    <li>Wifi: ⭐⭐</li>
                                    <li>Laundary:⭐⭐</li>
                                </ul>

                            </div>
                        </div>
                        <div className='form'>
                            <Forms />
                        </div>
                        <div className='about'>
                            <h2> About </h2>
                            <p>Beautiful campus hostel with hills in the background, providing your ward with a engrossed and contented environment for studies as well as enjoying the beauty of nature. Campus Hostel is located inside UPES bidholi campus to ensure security and comfort of students. It also makes easy for students to approach to all campus facilities like gym, outdoor sports, indoor sports and so on. Along with security and discipline, campus hostel is the best option for UPES students. </p>
                        </div>
                    </div>

                </div>
                <div className='book'>

                </div>




            </div>
            <Footer1 />

        </>
    );
}

export default Zenith;


