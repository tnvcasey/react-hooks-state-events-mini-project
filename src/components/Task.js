import React from "react";
import {useState} from "react"

function Task({ category, text, deleteTasks }) {


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteTasks}>X</button>
    </div>
  );
}

export default Task;
