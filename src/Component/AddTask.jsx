import React from 'react'
import Style from './AddTask.module.css'
import { AiFillFileAdd } from "react-icons/ai";


function AddTask({handleAddTask}){
  const [taskInput, setTaskInput] = React.useState("");
  const [taskDate, setTaskDate] = React.useState("");

  function handleTaskInput(e){
    setTaskInput(e.target.value)
  }

  function handleTaskDate(e){
    setTaskDate(e.target.value)
  }

  function handleSubmit(){
    if(taskInput=="" ){
      handleAddTask({task:"No Input Provided", date: "Date"})
    }
    else{
      handleAddTask({task:taskInput, date: taskDate})
      setTaskInput("");
      setTaskDate("");
    }
  }

  return (
    <div className={Style.container}>
      <input type="text" value={taskInput} placeholder='Enter you task here' className={Style.taskInput}  onChange={handleTaskInput}/>
      <input type="date" value={taskDate} className={Style.taskDate} name="taskDate" onChange={handleTaskDate}/>
      <button className={`btn btn-success ${Style['btn']}`} onClick={handleSubmit}><AiFillFileAdd /></button>
    </div>
  )
}

export default AddTask;