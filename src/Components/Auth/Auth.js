import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

import Container from '@material-ui/core/Container';


const Auth = (props) => {
  const [login, setLogin] = useState('true');

  const toggle = () => setLogin(!login)

  return (
    <Container>
     {login? <Login updateToken={props.updateToken} toggle={toggle}/> : 
     <Signup updateToken={props.updateToken} toggle={toggle}/>}
    </Container>
  )
}


export default Auth;