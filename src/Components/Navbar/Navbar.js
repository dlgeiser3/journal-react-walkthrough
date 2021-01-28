import React from 'react';
import styled from 'styled-components';
import './Navbar.css';
import { makeStyles } from '@material-ui/core/styles';
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

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #0f3057;
  display: flex;
  justify-content: space-between;
  position: sticky;
`
const Btn = styled.button`
  color: white;
  background-color: #0f3057;
  font-weight: 700;
  font-size: 1em;
  border: none;
  padding: 10px 10px;
  margin: 6px 8px 0 0;
`
const Title = styled.h2`
  color: white;
  margin: .6% 0 0 14px;
`
const useStyles = makeStyles(theme => ({

  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  }
  
}));

const Navbar = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <Nav>
      <Title>Learning Journal</Title>
      <div className='nav-buttons'>
        <Btn onClick={handleOpen} className='nav-button'>Login</Btn>
        <Btn className='nav-button'>Logout</Btn>
      </div>
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
    </Nav>
  );
};

export default Navbar;