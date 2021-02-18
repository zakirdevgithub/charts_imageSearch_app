import React from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';


export const Menu=()=>{
    return(
        <>
  <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand><NavLink exact to="/" id="company">React Project</NavLink></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
      <NavLink exact to="/" className="navmenu" activeClassName="active_class">HOME</NavLink>
    
      <NavLink exact to="/charts" className="navmenu" activeClassName="active_class">CHARTS</NavLink>
    
      <NavLink exact to="/search" className="navmenu" activeClassName="active_class">IMAGE SEARCH</NavLink> 
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    );
}