import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Navbar.css'

import { useAuth } from '../auth/AuthContext';
import axios from 'axios';

const MyNavbar = () => {

  const BACKEND_URL = 'https://spacedreamer-backend.onrender.com'

  const { username } = useAuth();

  const [isToggled, setIsToggled] = useState(false);

  const toggleNavbar = () => {
    setIsToggled(!isToggled);
  }

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/user/logout`, { withCredentials: true });
      console.log(response)
      window.location.reload()
    }
    catch (error) {
      console.log(error)
    }

  }

  return (
    <Navbar expand="lg" fixed="top" style={{ margin: 0, padding: 0 }} className='h-5'>
      <Navbar.Brand href='#'><img
        src={process.env.PUBLIC_URL + './Logo.png'}
        alt='logo'
        width="100"
        height="50"
        className="d-inline-block align-top mx-5"
        
      /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}>
        <img
          src={process.env.PUBLIC_URL + './menu-icon.png'}
          alt='menu'
          style={{ width: '30px', height: '30px' }}
          className={isToggled ? 'd-inline-block align-top rotated' : 'd-inline-block align-top'}
        />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between mx-5'>
        <Nav className="mx-auto" >
          <Nav.Item>
            <Nav.Link className='text-white' style={{ fontSize: '1rem' }} as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-white' style={{ fontSize: '1rem' }} as={Link} to="/news">News</Nav.Link>
          </Nav.Item>
          {username ? (
            <NavDropdown title={username} id="nav-dropdown" className='bg-warning rounded'>
              <NavDropdown.Item eventKey="option-1" className='bg-dark'>
                <Nav.Link style={{ fontSize: '1rem', color: 'white'}} as={Link} to="/addnews">Add news</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="option-2" className='bg-dark'>
                <Nav.Link style={{ fontSize: '1rem', color: 'white' }} as={Link} to="/">Edit news</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            null
          )}
        </Nav>
        <Nav>
          {username ? (
            <Button variant="outline-light" className='mx-1 my-1' onClick={handleLogout}>Log Out</Button>
          ) : (
            <>
              <Button variant='outline-light' className='mx-1 my-1' as={Link} to="/Signin">Log In</Button>
              <Button variant='outline-light' className='mx-1 my-1' as={Link} to="/Signup">Sign Up</Button>
            </>
          )}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
