import React from "react";
import { Input, Btn } from "../Form";

function Search(props) {

  return (
    <form>
      <Input
        name="search"
        placeholder={"Search Bar"}
        onChange={props.handleInputChange}
        value={props.textValue}
      />

      <Btn onClick={props.handleSubmit}>Button</Btn>
    </form>
  )
}

export default Search;