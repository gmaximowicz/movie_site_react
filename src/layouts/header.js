import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Container from 'react-bootstrap/lib/Container';

import { NavLink } from 'react-router-dom';

import logo from '../../images/movie.png';

function HeaderLayout(){
  return(
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="primary-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact to="/" className="nav-link" activeClassName="is-selected">
                Home
            </NavLink>
            <NavLink to="/movies" className="nav-link" activeClassName="is-selected">Movies</NavLink>
            <NavLink to="/actors" className="nav-link" activeClassName="is-selected">Actors</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default HeaderLayout;
