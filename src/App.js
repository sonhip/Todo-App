import React, {useState} from 'react'
import HeaderApp from './components/HeaderApp';
import ListItem from './components/ListItem';
import FooterApp from './components/FooterApp';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  
  const addTask = (nameTask) => {
    const task = {
      name: nameTask,
      done: false,
      show: true
    }
    const newTasks = [...todos, task];
    setTodos(newTasks);
  }

  const deleteTask = (id) =>{
    const newArr = [...todos];
    const a = newArr.filter((task, index) => newArr[index] !== newArr[id]);
    setTodos(a);
  }

  const doneTask = (id) =>{
    const newArr = [...todos];
    newArr[id].done = !newArr[id].done;
    setTodos(newArr);
  }

  const editTask = (id, value) =>{
    // const newArr = [...todos];
    // newArr[id].name = value;
    // setTodos(newArr);
    // console.log(id);
  }

  const pending = () =>{
    const newArr = [...todos];
    const a = newArr.map((task) =>{
      if(task.done === false){
        task.show = true
      }else{
        task.show = false;
      }
      return task;
    })
    setTodos(a);
  }
  const all = () =>{
    const newArr = [...todos];
    const b = newArr.map((task)=>{
        task.show = true;
        return task;
    })
    setTodos(b);
  }

  const completed = () =>{
    const newArr = [...todos];
    const a = newArr.map((task) =>{
      if(task.done === true){
        task.show = true
      }else{
        task.show = false;
      }
      return task;
    })
    setTodos(a);
  }

  return (
    <div className="App">
        <h3 className="header-text">Todo App</h3>
        <HeaderApp editTask = {editTask} addTask = {addTask} />
        <ListItem editTask = {editTask} doneTask = {doneTask} deleteTask = {deleteTask} todos = {todos} />
        <FooterApp completed = {completed} all = {all} pending = {pending}  todos = {todos} />
    </div>
  );
}

export default App;
