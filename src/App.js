import React from 'react';
import './App.css';
import './Team.css';
import './Hostel.css';
import { Switch, Route } from 'react-router-dom';
import Campushostel from './Campushostel';
import HomePage from './HomePage';
import Nav from './Nav';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import About from './About';
import Hostel from './Hostel';
import Team from './Team';
import Zenith from './Zenith';
import YouthGems from './YouthGems';
import WoodStock from './WoodStock';
import BookF from './BookF';
import Ashiyana from './Ashiyana';
import Jiya from './Jiya';
import DoonSchoolar from './DoonSchoolar';
import Agrasein from './Agrasein';
import Kk from './Kk';

function App() {
  return (
    <>
     <ScrollToTop />
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/BookF" component={BookF} />
        <Route exact path="/hostel" component={Hostel} />
        <Route exact path="/Campushostel" component={Campushostel} />
        <Route exact path="/Zenith" component={Zenith} />
        <Route exact path="/YouthGems" component={YouthGems} />
        <Route exact path="/WoodStock" component={WoodStock} />
        <Route exact path="/Ashiyana" component={Ashiyana} />
        <Route exact path="/Jiya" component={Jiya} />
        <Route exact path="/DoonSchoolar" component={DoonSchoolar} />
        <Route exact path="/Agrasein" component={Agrasein} />
        <Route exact path="/Stanza" component={Kk} />
      </Switch>
    

    </>
  )
}
export default App;
