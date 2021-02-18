import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Col,
  Container,
  Row,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import "../index.css";
import { SearchResult } from "./SearchResult";

export const Search = () => {
  const [letter, setLetter] = useState<any>();
  const [width, setWidth] = useState<number>(1600);
  const [height, setHeight] = useState<number>(900);

  const widthEvent = (e: any) => {
    setWidth(e.target.value);
  };

  const heightEvent = (e: any) => {
    setHeight(e.target.value);
  };

  const letterEvent = (e: any) => {
    setLetter(e.target.value);
  };

  return (
    <>
      <Container id="searchCom">
        <div className="container" id="searchBox">
          <InputGroup size="lg">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-lg">
                Search Image
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              onChange={letterEvent}
              placeholder="type anything and wait"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </div>
        <br />
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formBasicRange">
                  <Form.Label>Width&nbsp;({width}px)</Form.Label>
                  <Form.Control
                    onChange={widthEvent}
                    type="range"
                    min="100"
                    max="1600"
                    value={width}
                  />
                </Form.Group>
              </Form>
            </Col>

            <Col>
              <Form>
                <Form.Group controlId="formBasicRange">
                  <Form.Label>Height&nbsp;({height}px)</Form.Label>
                  <Form.Control
                    onChange={heightEvent}
                    type="range"
                    min="50"
                    max="900"
                    value={height}
                  />
                </Form.Group>
              </Form>
            </Col>

            <Col>
              <Button
                onClick={() => {
                  setWidth(1600);
                  setHeight(900);
                }}
                variant="warning"
              >
                Default
              </Button>
            </Col>
          </Row>
        </Container>{" "}
        <br /> <br />
        <SearchResult imageWidth={width} imageHeight={height} name={letter} />
      </Container>
    </>
  );
};
