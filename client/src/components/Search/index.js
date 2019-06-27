import React from "react";
import { Input, Btn } from "../Form";

function Search(props) {

  return (
    <div>
      <Input
        name="search"
        placeholder={"Search Bar"}
        onChange={props.handleInputChange}
        value={props.textValue}
      />

      <Btn onClick={props.handleSubmit}>Button</Btn>
    </div>
  )
}

export default Search;