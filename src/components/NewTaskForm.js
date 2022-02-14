import React, { useState } from "react";

function NewTaskForm( { addTasks, categories  } ) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState("")

  function changeText(e){
    setText(e.target.value)
  }

  function changeCat(e){
    setCategory(e.target.value)
  }

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault()
        addTasks({ category, text }) 
      }}
      className ="new-task-form">
      <label>
        Details
        <input onChange={changeText} value={text} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={changeCat} value={category} name="category">
          {categories.map((c) => {
            return <option key={c} value={c}>{c}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
