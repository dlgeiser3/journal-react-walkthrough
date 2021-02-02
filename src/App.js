import './App.css';
import React, {useState, useEffect} from 'react';

import Navbar from './Components/Navbar/Navbar';
import Post from './Components/Home/Post';
import ToggleDisplay from './Components/Home/ToggleDisplay';
import Display from './Components/Home/Display'

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    console.log(`CLEAR TOKEN: ${sessionToken}`)
  }
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  
  return (
    <div className="App">
      <Navbar token={sessionToken} clearToken={clearToken} updateToken={updateToken}/>
      <Post />
      <ToggleDisplay />
      <Display />
    </div>
  );
}

export default App;
