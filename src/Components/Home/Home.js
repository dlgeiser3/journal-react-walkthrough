import React, { useState } from 'react';
import Post from './Post';
import ToggleDisplay from './ToggleDisplay';
import Display from './Display';


const Home = (props) => {
  

  return (
    <div>
      <Post />
      <ToggleDisplay />
      <Display />
    </div>
  )
}


export default Home;