import React from "react";
import { Container, Row, Col, Jumbotron, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome to React Project</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <Col>
            <h1>Various Kind Of Charts</h1>

            <Button variant="primary" size="lg">
              <Link
                to="/Charts"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                View Charts
              </Link>
            </Button>
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              corporis vitae quos odio minima quas nisi assumenda vel id
              aspernatur ea temporibus impedit doloremque, minus, distinctio
              nulla molestiae. Exercitationem nesciunt veritatis sapiente nisi
              iure aspernatur minima rerum porro tempore perspiciatis suscipit,
              mollitia commodi maxime molestias ipsum quae praesentium ex
              repudiandae?
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <br />

        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              corporis vitae quos odio minima quas nisi assumenda vel id
              aspernatur ea temporibus impedit doloremque, minus, distinctio
              nulla molestiae. Exercitationem nesciunt veritatis sapiente nisi
              iure aspernatur minima rerum porro tempore perspiciatis suscipit,
              mollitia commodi maxime molestias ipsum quae praesentium ex
              repudiandae?
            </p>
          </Col>

          <Col>
            <h1>Search Images</h1>
            <Button variant="primary" size="lg">
              <Link
                to="/Search"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Search
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
