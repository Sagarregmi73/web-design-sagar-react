import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Data from "../Data.json";
const Courses = () => {
  return (
    <>
      <Container className="py-5">
        <h4>Our Courses</h4>
        <hr className="w-25" />
        <Row>
          {Data.Courses.map((items, index) => {
            return (
              <Col md={4} xs={6} key={index}>
                <Card className="card-styling mb-3">
                  <Card.Img
                    variant="top"
                    src={items.image}
                    card-styling
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>{items.Description}</Card.Text>
                    <Button variant="primary">Enroll Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Courses;
