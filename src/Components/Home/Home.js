import React, { useState } from 'react';
import Post from './Post';
import JournalGet from './JournalGet';
import Display from './Display';


const Home = (props) => {
  

  return (
    <div backgroundcolor="blue">
      <Post />
      <JournalGet />
      <Display />
    </div>
  )
}


export default Home;