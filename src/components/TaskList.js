import React from "react";
import Task from "./Task"




function TaskList({ tasks, deleteTasks }) {
  return (
    <div className="tasks">
      {tasks.map((t,i) => {
      return <Task key={i} {...t} deleteTasks={() => deleteTasks(t)} />
      })}
    </div>
  );
}

export default TaskList;
