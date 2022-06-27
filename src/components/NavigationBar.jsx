import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Login, Logout } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="/">
          <Typography fontWeight={700} color={"GrayText"}>
            Admin Panel
          </Typography>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/login">
              Login
              <span className="ms-1">
                <Login />
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
