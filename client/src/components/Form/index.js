import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="text" {...props} />
    </div>
  )
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  )
}

export function Btn(props) {
  return (
    <button {...props} className="btn btn-success" >
      {props.children}
    </button>
  )
}