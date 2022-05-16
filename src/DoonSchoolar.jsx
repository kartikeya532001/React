import React from 'react';
import './Hostelc.css';
import './Hostel.css';
import Forms from './Forms';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Footer1 from './Footer1';
import Nav1 from './Nav1';
import { Link } from 'react-router-dom';


function DoonSchoolar() {
    return (
        <>
            <Nav1 />
            <div className='Main'>
                <div className='dis'>
                    <div className='img'>
                        <img src='/img/16.jpeg' alt='pic1' className='img1' />
                    </div>
                    <div className='image'>
                        <img src='/img/14.jpeg' alt='pic1' className='img2' />
                        <div className='image2'>
                            <img src='/img/15.jpeg' alt='pic1' className='img2' />
                        </div>

                    </div>
                    <div className='prices'>
                        <div>
                            
                                <div className='hcard1'>
                                    <h1> Prices </h1>
                                    <p>
                                        <br /> Triple Sharing Room with <br/> Common Washroom: 1,50,000/- <br />
                                        <br /> Triple Sharing Room with <br/> Attached Washroom: 1,60,000/- <br />
                                        <br /> Triple Sharing AC Room with <br/> Attached Washroom: 1,80,000/-<br />
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
                    <h1> DoonSchoolar </h1>
                    <h3> Sai Mandir, Bidholi,Dehradun,Uttarakhand 248001</h3>
                    <p> Rating: ⭐⭐⭐</p>
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
                                    <li>Food: ⭐⭐</li>
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
                            <p>In the wake of this global atrocity our team has worked upon one of the major challenges that students faced after covid-19 was over i.e. booking of hostel online as we know students faced a lot of difficulties finding right room and right facilities for them so that they can avail for but because of some government restrictions students weren’t able to go that is why the need is to create a platform so that students are able to see and rent rooms through an online portal. </p>
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

export default DoonSchoolar;


