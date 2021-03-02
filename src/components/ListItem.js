
import React from 'react'
import { Button } from 'antd';
export default function ListItem( {todos, deleteTask, doneTask, editTask} ) {
  
    return (
        <div className = "box-list">
            {todos.map((task, index) => {
                return(
                    <div key = {index}>
                        {task.show && (
                            <div  className = 'taskLine' >
                                <span style={{  textDecoration: task.done ? "line-through" : ""}} >🤟</span>
                                <input  
                                    className = "task-name" 
                                    style={{  textDecoration: task.done ? "line-through" : ""}}  
                                    value = {task.name}
                                    onChange = {(e) => editTask(index, e.target.value)} 
                                /> 
                                <div className = "btn-control">
                                    <Button type="primary" onClick = {() => doneTask(index)} >{task.done ? "Not Done" : "Done"}</Button>
                                    <Button type="primary" danger onClick = {() => deleteTask(index)}>Delete</Button>
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
// 🤟
