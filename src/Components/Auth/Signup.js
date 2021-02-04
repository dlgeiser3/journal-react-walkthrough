import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './Auth.css'



const useStyles = makeStyles(() => ({

  button: {
    marginTop: "2em",
    width: "100%",
    backgroundColor: '#00587a',
    color: 'white',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: '#008891',
    }
  },

  input: {
    marginTop: 10,
    width: "100%"
  },

  toggleBtn:{
    marginTop: '20px',
    backgroundColor: 'white',
    padding: '2px 4px',
    fontSize: '.7em',
    fontWeight: '600'
  }

}));

const Signup = (props) => {
  const [userName, setUserName] = useState ('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/user/register`, {
      method: 'POST',
      body: JSON.stringify({ email: email, userName: userName, password: password }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      props.updateToken(data.sessionToken)
      // window.alert("You're signed up!")
    })
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" variant="outlined" className={classes.input} onChange={(e) => setUserName(e.target.value)} name="userName" value={userName} />
        <TextField label="Email" variant="outlined" className={classes.input} type='email' onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
        <TextField label="Password" variant="outlined" className={classes.input} type='password' onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
        <Button type="submit" className={classes.button}>Sign Up</Button>
        <Button className={classes.toggleBtn} onClick={props.toggle}>Click here to Login!</Button>
      </form>
    </div>
  )
}

export default Signup;