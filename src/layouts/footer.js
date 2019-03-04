import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Container from 'react-bootstrap/lib/Container';

import logo from '../../images/movie.png';

function Footer(){
  return(
    <Navbar bg="primary" variant="dark" expand="lg" fixed="bottom">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Movies site logo"
          />
        </Navbar.Brand>
        <Navbar id="footer-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#guides">Movies</Nav.Link>
            <Nav.Link href="#tours">Actors</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  )
}

export default Footer;
