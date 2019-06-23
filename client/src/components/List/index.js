import React from "react";

export function List(props) {
  return (
    <div className="list">
      <ul className="list-group">{props.children}</ul>
    </div>
  );
}

export function ListItem(props) {
  console.log(props);

  return (
    <li className="list-group-item">
      <img src={props.img} alt="" />
      <div className="">
        <a href={props.link}><h6>{props.title}</h6></a>
        <p>By {props.author}</p>
        <a><span className="small-link">View Description</span></a>
        {/* <p>{props.description}</p> */}
        {props.add ? (<button onclick={() => props.add(props)}></button> ):("")}        
      </div>

    </li>

  )
}