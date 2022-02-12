import React from "react";

function Task(props) {
  return (
    <div className="task">
      <div className="label">{props.taskObj.category}</div>
      <div className="text">{props.taskObj.text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
