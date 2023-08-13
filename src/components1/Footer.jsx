import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Footer = () => {
  return (
    <>
      <Container fluid className="footer py-3">
        <Row>
          <Col md={4}>
            <ul>
              <li>
                <NavLink to="/" className="footer-nav">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" className="footer-nav">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="footer-nav">
                  Blogs
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <p>Address: Tinkune,Kathmndu</p>
            <p>Phone: 899-987-678-4567</p>
          </Col>
          <Col md={4}>
            <ul>
              <li>
                <NavLink to="/services" className="footer-nav">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/studentsay" className="footer-nav">
                  Student What Say
                </NavLink>
              </li>
              <li>
                <NavLink to="/event" className="footer-nav">
                  Event
                </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <p className="text-center fw-bold">
            Powered by 2023@Sagar Regmi MetaHorizon.INC{" "}
          </p>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
