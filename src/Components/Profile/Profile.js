import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Display from '../Home/Display'

const useStyles = makeStyles(() => ({
  
  wrapper: {
    marginTop: 0,
    paddingTop: "30px"
  },

  username: {
    margin: "65px auto 0",
    fontSize: "2em"
  }


}));

const Profile = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.username}>username</h3> 
      <h3 className={classes.greeting}> Here's your posts! </h3>
      <Display />
    </div>
  )
}


export default Profile;