import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function NavbarHome() {
  return (
    <Navbar bg="warning" expand="lg" className="bg-warning py-4 fixed-top">
      <Container>
        <a
          href="index.html"
          className="navbar-brand d-flex align-items-center justify-content-between"
        >
          <img src="images/site-icon-dark.png" alt="Site Icon" />
          <span id="brand-name" className="mx-3">
            ULTRA Foundation
          </span>
        </a>

        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse>
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item px-2 py-2">
              <a href="#" className="nav-link text-dark">
                DASHBOARD
              </a>
            </li>
            <li className="nav-item px-2 py-2">
              <a href="#contact" className="nav-link text-dark">
                DONATION
              </a>
            </li>
            <li className="nav-btns px-3 py-2">
              <a href="login.html" className="btn btn-dark text-warning px-4">
                LOGOUT
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
