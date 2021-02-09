import React from 'react';
// import styled from 'styled-components';
import './Navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Auth from '../Auth/Auth'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({


  root: {
    flexGrow: 1,
  },

  nav: {
    backgroundColor: "#0f3057",
   
  },

  toolbar: {
    width: "96%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  title: {
    fontWeight: "600",
  },

  buttons: {
    display: "flex",
  },

  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (


    <div className={classes.root}>
      <AppBar className={classes.nav} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Eleven Journal
          </Typography>
          <div className={classes.buttons}>
            {props.home? <Button color="inherit" onClick={props.homeToggle}>Profile</Button> :
            <Button color="inherit" onClick={props.homeToggle}>Home</Button>}

            {/* Token check Ternary for Login / Logout function */}
            
            <Button color="inherit" onClick={handleOpen}>Login</Button>
            <Button color="inherit" onClick={props.clearToken} className='nav-button'>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Modal
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Auth updateToken={props.updateToken} />
        </div>
      </Modal>
    </div>

    // <Nav>
    //   <Title>Learning Journal</Title>
    //   <div className='nav-buttons'>
    //     <Btn className='nav-button'>Home</Btn>
    //     <Btn className='nav-button'>Profile</Btn>
    //     <Btn onClick={handleOpen} className='nav-button'>Login</Btn>
    //     <Btn onClick={props.clearToken} className='nav-button'>Logout</Btn>
    //   </div>
    //   <Modal
    //     className={classes.modal}
    //     aria-labelledby="simple-modal-title"
    //     aria-describedby="simple-modal-description"
    //     open={open}
    //     onClose={handleClose}
    //   >
    //     <div style={modalStyle} className={classes.paper}>
    //       <Auth updateToken={props.updateToken} />
    //     </div>
    //   </Modal>
    // </Nav>
  );
};

export default Navbar;