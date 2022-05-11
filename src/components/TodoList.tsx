import React from "react";
import { Todo } from '../model';
import TodoCard from './TodoCard'

interface IProps {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos}: IProps) => {
  const deleteTodoCard = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== +id))
  }

  const updateTodo = (id: number, editedTodo: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, todo: editedTodo } : todo))
  }

  return (
    <ul>
      {
        todos.map(
          todo => <TodoCard key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodoCard={deleteTodoCard}/>
        )
      }
    </ul>
  )
}

export default TodoList