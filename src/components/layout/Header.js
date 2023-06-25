import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiFillDashboard, AiFillHome } from "react-icons/ai";
import { GiEntryDoor } from "react-icons/gi";
import { ImExit } from "react-icons/im";

export const Header = () => {
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <AiFillHome /> Home
            </Nav.Link>
            <Nav.Link href="#link">
              <AiFillDashboard /> Dashboard
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <ImExit /> Sign out
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <GiEntryDoor /> Sign in
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <ImExit /> Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
