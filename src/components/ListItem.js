// import React from 'react'

// export default function ListItem( {todos, deleteTask, doneTask} ) {

//     return (
//         <div className = "box-list">
//             {todos.map((task, index) => {
//                 return(
//                     <div key = {index} className = 'taskLine' >
//                         <p  className = "task-name"  style={{  textDecoration: task.done ? "line-through" : ""}} >{task.name}</p>
//                         <div className = "btn-control">
//                             <button onClick = {() => doneTask(index)} >{task.done ? "Not Done" : "Done"}</button>
//                             <button >Edit</button>
//                             <button onClick = {() => deleteTask(index)}>Delete</button>
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }



import React from 'react'

export default function ListItem( {todos, deleteTask, doneTask} ) {

    return (
        <div className = "box-list">
            {todos.map((task, index) => {
                return(
                    <div key = {index}>
                        {task.show && (
                            <div  className = 'taskLine' >
                                <p  className = "task-name"  style={{  textDecoration: task.done ? "line-through" : ""}} >{task.name}</p>
                                <div className = "btn-control">
                                    <button onClick = {() => doneTask(index)} >{task.done ? "Not Done" : "Done"}</button>
                                    <button >Edit</button>
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
