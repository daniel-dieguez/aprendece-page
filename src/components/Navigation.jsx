import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function () {
  return (
<div>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Nav.Link as={NavLink} to="/luis-psicologo-dasboard"> Inicio </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</div>
  )
}
