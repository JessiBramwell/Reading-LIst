import React from "react";
import "./style.css"

export function List(props) {
  return (
    <div className="list">
      <ul className="list-group">{props.children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return (

    <li className="list-group-item" data-id={props.id}>
      <div className="book-container">

        <img src={props.img} alt="" />

        <div className="book-details">
          <a href={props.link}>
            <h6>{props.title}</h6>
          </a>
          <p>By {props.author}</p>
          {props.add ? (
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={() => props.add(props)}>Add</button>
          ) : (
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => props.delete(props.id)}>Delete</button>
            )}
          <div className="book-description">
            <p>{props.description}</p>
          </div>

        </div>

      </div>
    </li>
    
  )
}