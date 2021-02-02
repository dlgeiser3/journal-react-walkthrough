import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({

  button: {
    marginTop: "20px",
    width: "10%",
    backgroundColor: '#00587a',
    color: 'white',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: '#008891',
    }
  },

  input: {
    marginTop: "50px",
    width: "80%",
  }

}));

const Post = (props) => {

  
  const classes = useStyles();

  return (
    <Container>
      <form>
        <TextField label="New Journal Entry" multiline rows="5" className={classes.input} variant="outlined" />
        <br />
        <Button type="submit" className={classes.button}>Post</Button>
      </form>
    </Container>
  )
}


export default Post;