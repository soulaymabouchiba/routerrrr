import React from 'react';
import Edit from './Edit';
import { deleteTask, doneTask } from '../JS/Action/action';
import { useDispatch } from 'react-redux';
import "./Taskcss.css";


const Task = ({task}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <span className={task.isDone?"done" : null}> {task.text} </span>
            <button onClick={()=> dispatch(deleteTask(task.id))}> Delete </button>
            <Edit task={task} />
            <button onClick={()=> dispatch(doneTask(task.id))}>
                {task.isDone ? "undone" : "done"}
            </button>
        </div>
    )
}

export default Task;
