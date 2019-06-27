import React from "react";
import { Col } from "../Grid";

function Results(props) {
  
  console.log(props);
  
  return (
    <Col size={"md-6"}>
      <h1>These are search results</h1>
      {props.children}
    </Col>
  )

}

export default Results;