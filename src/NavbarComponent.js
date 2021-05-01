import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          <Navbar.Text className='mr-3'>
            <Link to='/'><h5>Home</h5></Link>
          </Navbar.Text>
          <Navbar.Text className='mr-3'>
            <Link to='/register'><h5>Register</h5></Link>
          </Navbar.Text>
          <Navbar.Text className='mr-3'>
            <Link to='/login'><h5>Login</h5></Link>
          </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavbarComponent;
