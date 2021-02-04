import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles(() => ({

  
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    maxWidth: "1200px"

  },
  
  root: {
    minWidth: 275,
    maxWidth: 275,
    paddingTop: 0,
    margin: "10px"
  },

  content: {
    padding: 0,
  },
  
  banner: {
    marginBottom: "10px",
    paddingBottom: "4px",
    width: "100%",
    backgroundColor: "#0f3057"
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "white"
  },

  journal: {
    padding: "3px 18px 0",
  },

  // userInfo: {
  //   marginBottom: 12,
  // },

  buttons:{
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },

  button: {
    width: "100%",
    backgroundColor: '#00587a',
    color: 'white',
    fontWeight: 700,
  },

}));

const Post = (props) => {


  const classes = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Container className={classes.banner}>
            <Typography className={classes.title} variant="h5" component="h2">
              Journal Title
        </Typography>
          </Container>
          <Typography className={classes.journal} variant="body2" component="p">
            Isn't that fantastic? You can just push a little tree out of your brush like that. Isn't it fantastic that you can change your mind and create all these happy things? Mountains are so simple, they're hard.
        </Typography>
        {/* TERNARY TO DISPLAY BUTTONS OR USER NAME */}
          {/* <Typography className={classes.userInfo} color="textSecondary">
            user name
        </Typography> */}
        </CardContent>
        <CardActions >
          <div className={classes.buttons}>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          </div>
        </CardActions>
      </Card>      

{/* FILLLER CONTENT */}
<Card className={classes.root}>
        <CardContent className={classes.content}>
          <Container className={classes.banner}>
            <Typography className={classes.title} variant="h5" component="h2">
              Journal Title
        </Typography>
          </Container>
          <Typography className={classes.journal} variant="body2" component="p">
            Isn't that fantastic? You can just push a little tree out of your brush like that. Isn't it fantastic that you can change your mind and create all these happy things? Mountains are so simple, they're hard.
        </Typography>
        {/* TERNARY TO DISPLAY BUTTONS OR USER NAME */}
          {/* <Typography className={classes.userInfo} color="textSecondary">
            user name
        </Typography> */}
        </CardContent>
        <CardActions >
          <div className={classes.buttons}>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          </div>
        </CardActions>
      </Card>      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Container className={classes.banner}>
            <Typography className={classes.title} variant="h5" component="h2">
              Journal Title
        </Typography>
          </Container>
          <Typography className={classes.journal} variant="body2" component="p">
            Isn't that fantastic? You can just push a little tree out of your brush like that. Isn't it fantastic that you can change your mind and create all these happy things? Mountains are so simple, they're hard.
        </Typography>
        {/* TERNARY TO DISPLAY BUTTONS OR USER NAME */}
          {/* <Typography className={classes.userInfo} color="textSecondary">
            user name
        </Typography> */}
        </CardContent>
        <CardActions >
          <div className={classes.buttons}>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          </div>
        </CardActions>
      </Card>      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Container className={classes.banner}>
            <Typography className={classes.title} variant="h5" component="h2">
              Journal Title
        </Typography>
          </Container>
          <Typography className={classes.journal} variant="body2" component="p">
            Isn't that fantastic? You can just push a little tree out of your brush like that. Isn't it fantastic that you can change your mind and create all these happy things? Mountains are so simple, they're hard.
        </Typography>
        {/* TERNARY TO DISPLAY BUTTONS OR USER NAME */}
          {/* <Typography className={classes.userInfo} color="textSecondary">
            user name
        </Typography> */}
        </CardContent>
        <CardActions >
          <div className={classes.buttons}>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          </div>
        </CardActions>
      </Card>      

      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Container className={classes.banner}>
            <Typography className={classes.title} variant="h5" component="h2">
              Journal Title
        </Typography>
          </Container>
          <Typography className={classes.journal} variant="body2" component="p">
            Isn't that fantastic? You can just push a little tree out of your brush like that. Isn't it fantastic that you can change your mind and create all these happy things? Mountains are so simple, they're hard.
        </Typography>
        {/* TERNARY TO DISPLAY BUTTONS OR USER NAME */}
          {/* <Typography className={classes.userInfo} color="textSecondary">
            user name
        </Typography> */}
        </CardContent>
        <CardActions >
          <div className={classes.buttons}>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          </div>
        </CardActions>
      </Card>      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Container className={classes.banner}>
            <Typography className={classes.title} variant="h5" component="h2">
              Journal Title
        </Typography>
          </Container>
          <Typography className={classes.journal} variant="body2" component="p">
            Isn't that fantastic? You can just push a little tree out of your brush like that. Isn't it fantastic that you can change your mind and create all these happy things? Mountains are so simple, they're hard.
        </Typography>
        {/* TERNARY TO DISPLAY BUTTONS OR USER NAME */}
          {/* <Typography className={classes.userInfo} color="textSecondary">
            user name
        </Typography> */}
        </CardContent>
        <CardActions >
          <div className={classes.buttons}>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          </div>
        </CardActions>
      </Card>      



    </Container>
  
  
  
  )
}


export default Post;