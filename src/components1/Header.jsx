import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import SliderCarousel from "./SliderCarousel";
//import Logo from "../assets/images/logo.svg";
const Header = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <h6>Broadway Infosys</h6>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h6>Broadway Infosys</h6>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" className="nav-styling">
                    Home
                  </NavLink>
                  <NavLink to="/aboutus" className="nav-styling">
                    About Us
                  </NavLink>
                  <NavLink to="/blogs" className="nav-styling">
                    Blogs
                  </NavLink>
                  <NavLink to="/services" className="nav-styling">
                    Services
                  </NavLink>
                  <NavLink to="/studentsay" className="nav-styling">
                    Student What Say
                  </NavLink>

                  <NavDropdown
                    title="Others"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      <NavLink to="/login" className="nav-styling">
                        Login
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      <NavLink to="/registration" className="nav-styling">
                        Registration
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      <NavLink to="/courses" className="nav-styling">
                        Courses
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <SliderCarousel />
    </>
  );
};

export default Header;
