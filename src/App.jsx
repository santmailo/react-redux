
import React from 'react'
import Style from './App.module.css'
import AddTask from './Component/AddTask';
import ShowTask from './Component/ShowTask'


function App() {

  const [task, setTask] = React.useState([]);

  function handleAddTask(newTask){
    setTask([...task, newTask])
  }

  function handleDelete(taskName){
    const updatedTasks = task.filter(item => item.task!==taskName);
    setTask(updatedTasks);
    }
  return (
    <div className={Style.container}>
      <AddTask handleAddTask={handleAddTask}/>
      <ShowTask tasks={task} handleDelete={handleDelete}/>
    </div>
  )
}

export default App;