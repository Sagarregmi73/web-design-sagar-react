import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
const SliderCarousel = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={4} className="py-5">
            <ul>
              <li>
                <NavLink to="/" className="NavLink-styling">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" className="NavLink-styling">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="NavLink-styling">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="NavLink-styling">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/studentsay" className="NavLink-styling">
                  Student What Say
                </NavLink>
              </li>
              <li>
                <NavLink to="/event" className="NavLink-styling">
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="NavLink-styling">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to="/feedback" className="NavLink-styling">
                  Feedback
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="NavLink-styling">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/registration" className="NavLink-styling">
                  Registration
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={8}>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-style-image"
                  src="https://plus.unsplash.com/premium_photo-1661779091139-7c8caf3d41ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Learn to  Discover"
                />
                <Carousel.Caption>
                  <h5 className="header-text-carousel">Learn to Discover</h5>
                  <p className="desc-text-carousel">
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-style-image"
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5 className="header-text-carousel">Knowledge is key</h5>
                  <p className="desc-text-carousel">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-style-image"
                  src="https://plus.unsplash.com/premium_photo-1664372145541-4556b409492e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5 className="header-text-carousel">
                    Innovation and Carrier Development
                  </h5>
                  <p className="desc-text-carousel">
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SliderCarousel;
