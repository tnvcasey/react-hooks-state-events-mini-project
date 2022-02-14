import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const addTasks = (task) => {
    setTasks((tasks) => {
      return [...tasks, task]
    })
  }

  const deleteTasks= (t) => {
    setTasks((tasks) => {
      return tasks.filter((task) => {
      return task !== t;
      })
    })
  }


  const filteredTasks = 
    category === "All" ? tasks: tasks.filter((task => {
      return task.category === category; 
    }))

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategory={setCategory} />
      <NewTaskForm  addTasks={addTasks} categories={CATEGORIES}/>
      <TaskList tasks={filteredTasks} deleteTasks={deleteTasks} />
    </div>
  );
}

export default App;
