import React from 'react';
import './App.css';
// import Home from './Home';
// import About from './About';
// import HData from './HostelD';
// import Data from './teamd';
// import Team from './Team';
import './Team.css';
import './Hostel.css';
// import Hostel from './Hostel';
// import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Campushostel from './Campushostel';
import HomePage from './HomePage';
import Nav from './Nav';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
     <ScrollToTop />
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Campushostel" component={Campushostel} />
      </Switch>
      <Footer />

    </>
  )
}
export default App;
