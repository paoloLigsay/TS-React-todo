import React, { useContext } from "react";
import { Todo } from '../model';
import TodoCard from './TodoCard'
import { TodoContext } from '../App'

interface IProps {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = () => {

  const todoContext = useContext(TodoContext)

  const deleteTodoCard = (id: string) => {
    todoContext?.setTodos(todoContext?.todos.filter(todo => todo.id !== +id))
  }

  const updateTodo = (id: number, editedTodo: string) => {
    todoContext?.setTodos(todoContext?.todos.map(todo => todo.id === id ? { ...todo, todo: editedTodo } : todo))
  }

  return (
    
    <ul>
       
      {
        todoContext?.todos.map(
          todo => <TodoCard key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodoCard={deleteTodoCard}/>
        )
      }
    </ul>
  )
}

export default TodoList