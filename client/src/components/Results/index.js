import React, { Component } from "react";
import { Col } from "../Grid";
// import { List, ListItem } from "../List";


function Results(props) {
  
  return (
    <Col size={"md-6"}>
      <h1>These are Results</h1>
      {props.children}
    </Col>
  )

}

export default Results;