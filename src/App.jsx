
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import Todo from './components/Todo/Todo'
import TodoList from './components/TodoList/TodoList'
import { useState } from "react"


function App() {

  const [list , setList ] = useState([
    {id:1, todoData: 'todo 1', finished: false},
    {id:2, todoData: 'todo 2', finished: false},

  ])
  return (
    <>
      <AddTodo updateList = { (todo) => setList([
          ...list ,{ id : list.length+1, todoData : todo, finished : false } 
        ])} 
      />
      <TodoList list={list} />
    </>
  )
}

export default App
