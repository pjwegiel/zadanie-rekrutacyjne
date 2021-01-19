import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Pokeball from '../assets/Pokeball.svg';

const useStyles = makeStyles({
  container: {
    padding: '1%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  image: {
    height: '10vh',
    width: '10vw'
  }
});

export const Navbar: React.FunctionComponent = () => (
  <Container className={useStyles().container}>
    <NavLink to="/">
      <img className={useStyles().image} src={Pokeball} alt="logo" />
    </NavLink>
  </Container>
);
