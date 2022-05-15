import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Campushostel from './Campushostel';

function Path () {
    return(
        <>
      <Routes>
          <Route path='/campusHostel'  component= {Campushostel}/>
      </Routes>
        </>
    );
} 

export default Path ;