import React from "react";
import Task from "./Task"




function TaskList(props) {
  return (
    <div className="tasks">
      {props.allOfTasks.map(task => <Task key={task.name} taskObj={task}/>)}

    </div>
  );
}

export default TaskList;
