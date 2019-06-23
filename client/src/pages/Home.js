import React, { Component } from "react";
// import { Link } from "react-router-dom";

import { Container, Col, Row } from "../components/Grid";
import { Input, TextArea, Btn } from "../components/Form";
import Results from "../components/Results";
import Books from "../components/Books";

class Home extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <h1>This is the Books page</h1>
            <Input />
            <Btn>Search</Btn>
          </Col>
        </Row>
        <Row>
          <Results />
          <Books />
        </Row>
      </Container>
    )
  }
}

export default Home;