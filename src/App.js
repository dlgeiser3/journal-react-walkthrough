import './App.css';
import React, {useState, useEffect} from 'react';


import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';


function App() {

  const [sessionToken, setSessionToken] = useState('');
  const [home, setHome] = useState(true);

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

  const homeToggle = () => setHome(!home);

  return (
    <div className="App">
      <Navbar homeToggle={homeToggle} home={home} token={sessionToken} clearToken={clearToken} updateToken={updateToken}/>
      {home ? <Home /> : <Profile />}
    </div>
  );
}

export default App;
