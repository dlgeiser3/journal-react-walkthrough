import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Auth.css'



const useStyles = makeStyles(() => ({

  button: {
    marginTop: "2em",
    width: "60%",
    backgroundColor: '#00587a',
    color: 'white',
    fontWeight: 700,
  },

  input: {
    marginTop: 10,
    width: "50%"
  },

  toggleBtn:{
    marginTop: '10px',
    backgroundColor: 'white',
    padding: '2px 4px',
    fontSize: '.7em',
    fontWeight: '600'
  }

}));

const Signup = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const classes = useStyles();


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/user/login`, {
      method: 'POST',
      body: JSON.stringify({ user: { email: email, password: password } }),
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
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br/>
        <input className={classes.input} type='email' onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
        <br/>
        <label htmlFor="password">Password</label>
        <br/>
        <input className={classes.input} type='password' onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
        <Button type="submit" className={classes.button}>Login</Button>
        <Button className={classes.toggleBtn} onClick={props.toggle}>Click here to Sign Up!</Button>
      </form>
    </div>
  )
}

export default Signup;