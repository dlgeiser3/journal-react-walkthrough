// import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

import Container from '@material-ui/core/Container';


const Auth = (props) => {

  return (
    <Container>
      <Login updateToken={props.updateToken}/>
      <Signup updateToken={props.updateToken}/>
    </Container>
  )
}


export default Auth;