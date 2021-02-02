import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({

  wrapper: {
    margin: "50px",
    display: "flex",
    flexDirection : "row",
    justifyContent: "space-around",
  },
  search: {
    display: "flex",
  },

  searchButton: {
    backgroundColor: '#00587a',
    color: 'white',
    fontWeight: 700,
    marginTop: "3px",
    marginLeft: "5px",
    padding: "5px",
    '&:hover': {
      backgroundColor: '#008891',
    }
  },
  
  button: {
    backgroundColor: '#00587a',
    color: 'white',
    width: "10%",
    fontWeight: 700,
    marginTop: "3px",
    marginLeft: "5px",
    padding: "5px",
    '&:hover': {
      backgroundColor: '#008891',
    }
  },

  input: {
    // marginTop: "50px",
    width: "100%",
  }

}));

const Post = (props) => {

  
  const classes = useStyles();

  return (
    <Container className={classes.wrapper}>
      <div className={classes.search}>
      <TextField label="Search" variant="outlined" size="small" defaultValue="Small" className={classes.input} />
      <IconButton type="submit" size="small" className={classes.searchButton}><SearchIcon/></IconButton>
      </div>
      <Button className={classes.button}>Get All</Button>
    </Container>
  )
}


export default Post;