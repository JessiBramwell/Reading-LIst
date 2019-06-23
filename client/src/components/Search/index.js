import React from "react";
import { Input, Btn } from "../Form";

function Search(props) {

  console.log(props);

  return (
    <div>
      <Input
        
      />
      <Btn onClick={props.handleSubmit}>Submit</Btn>
    </div>
  )
}

export default Search;