import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({

  button: {
    marginTop: "10px",
    width: "10%",
    backgroundColor: '#00587a',
    color: 'white',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: '#008891',
    }
  },

  formDiv:{
    padding: "100px 10% 0",
    display: "flex",
    justifyContent: "flex-start"
  },
  
  smInput: {
    width: "20%",

  },

  input: {
    marginTop: "10px",
    width: "80%",
  }

}));

const Post = (props) => {

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [entry, setEntry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/journal/new`, {
      method: 'POST',
      body: JSON.stringify(
        {
          title: title,
          date: date,
          entry: entry
        }
      ),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  };
  const classes = useStyles();

  return (
    <Container>
      <form>
        <div className={classes.formDiv}>
        <TextField size="small" label="Title" className={classes.smInput} variant="outlined" />
        <TextField size="small" className={classes.smInput} type="date" variant="outlined" />
        </div>
        <TextField label="New Journal Entry" multiline rows="5" className={classes.input} variant="outlined" />
        <br />
        <Button type="submit" className={classes.button}>Post</Button>
      </form>
    </Container>
  )
}


export default Post;