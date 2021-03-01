
import React from 'react'

export default function ListItem( {todos, deleteTask, doneTask, handleEdit} ) {

    return (
        <div className = "box-list">
            {todos.map((task, index) => {
                return(
                    <div key = {index}>
                        {task.show && (
                            <div  className = 'taskLine' >
                                <input  className = "task-name" onClick = {(e) => console.log(index)}  style={{  textDecoration: task.done ? "line-through" : ""}} value = {task.name} />
                                <div className = "btn-control">
                                    <button onClick = {() => doneTask(index)} >{task.done ? "Not Done" : "Done"}</button>
                                    <button onClick = {() => deleteTask(index)}>Delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
