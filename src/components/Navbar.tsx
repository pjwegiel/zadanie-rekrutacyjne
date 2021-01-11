import React from 'react';
import Container from '@material-ui/core/Container';
import {NavLink} from 'react-router-dom';

import Pokeball from '../assets/Pokeball.svg';

export const Navbar = () => (
    <Container style={{padding: '1%', display: 'flex', justifyContent: 'space-around'}} >
       <NavLink to="/">
        <img src={Pokeball} style={{height: '10vh', width:'10vw'}} alt='logo'></img>
       </NavLink> 
    </Container>
);