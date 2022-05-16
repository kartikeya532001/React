import React from 'react'
import About from './About';
import Footer from './Footer';
import Home from './Home';
import Hostel from './Hostel';
import Nav from './Nav';
import Team from './Team';
import HData from './HostelD';
import Data from './teamd';

function HomePage() {
    return (
        <>
        <Nav />
            <Home />
            <About />

            <div className='team'>
                <h1> Our Team</h1>
            </div>

            {Data.map((d) => (
                <Team
                    name={d.name}
                    img={d.img}
                    course={d.course}
                />
            ))}

            <div className='hostel'>
                <h1> Hostels</h1>
            </div>
            {HData.map((dat) => (
                <Hostel
                    link={dat.link}
                    name={dat.name}
                    img={dat.img}
                    price={dat.price}
                />
            ))}
            <Footer />
        </>
    );
}

export default HomePage