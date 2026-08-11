import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/login">
            Logo
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/user/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/user/about">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/user/users">
                Users
              </Nav.Link>

              <Nav.Link as={Link} to="/user/contact">
                Contact
              </Nav.Link>

              <Nav.Link as={Link} to="/user/settings">
                Settings
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default MyNavbar;
