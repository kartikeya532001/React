
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Data from './teamd';
import Team from './Team';
import './Team.css';
import Hostel from './Hostel';
import HData from './HostelD';

function ncard (val) {
  return (
    <Team 
      name={val.name}
      img={val.img}
      course={val.course}
    />
  );

}
function ncards (val) {
  return (
    <Hostel
      name={val.name}
      img={val.img}
      course={val.course}
    />
  );

}
function App() {
  return (
 <>
   <Nav />
   <Home />
   <About />
   <div className='team'>
        <h1> Our Team</h1>
        </div>
        {Data.map(ncard)}
        <div className='team'>
        <h1> Hostels</h1>
        </div>
        {HData.map(ncards)}
 </>
  );
}

export default App;
