import Todo from "../Todo/Todo"

function TodoList() {
    const list = [
        {id:1, todoData: 'todo 1'},
        {id:2, todoData: 'todo 2'},

    ]
  return (
    <div>
        {list.length > 0 && list.map( todo => <Todo key={todo.id} id={todo.id} todoData = {todo.todoData} />)}  

    </div>
  )
}

export default TodoList;