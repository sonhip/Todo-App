import React from 'react'

export default function FooterApp({todos, pending, all, completed}) {
    return (
        <div className = "footer">
            <button onClick = {() => all()}>All Tasks: {todos.length}</button>
            <button onClick = {() => pending()} >Pending: {(todos.filter((task) => task.done === false)).length}</button>
            <button onClick = {() => completed()}>Completed: {(todos.filter((task) => task.done === true)).length}</button>
        </div>
    )
}
