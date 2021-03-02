import React from 'react'
import { Button } from 'antd';

export default function FooterApp({todos, pending, all, completed}) {
    return (
        <div className = "footer">
            <Button type = "default" onClick = {() => all()}>All Tasks: {todos.length}</Button>
            <Button type = "default" onClick = {() => pending()} >Pending: {(todos.filter((task) => task.done === false)).length}</Button>
            <Button type = "default" onClick = {() => completed()}>Completed: {(todos.filter((task) => task.done === true)).length}</Button>
        </div>
    )
}
