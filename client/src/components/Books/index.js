import React from "react";
import { Col } from "../Grid";

function Books(props) {

  return (
    <Col size={"md-6"}>
      <h1>This is your reading list</h1>
      {props.children}

    </Col>
  )
}

export default Books;