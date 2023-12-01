import Style from './ShowTask.module.css'
import { AiFillMinusCircle } from "react-icons/ai";

function ShowTask({tasks, handleDelete}){
  return (
    <ul className={`list-group`}>
      {tasks.map((item,i) => {
        return <li key={i+1} className={`list-group-item ${Style.container}`}>
          <span  className={Style.taskInput}>{item.task}</span>
          <span className={Style.taskDate}>{item.date}</span>
          <button className={`btn btn-danger ${Style.btn}`} onClick={()=> handleDelete(item.task)}><AiFillMinusCircle /></button>
        </li>
      })}
    </ul>
  )
}

export default ShowTask;