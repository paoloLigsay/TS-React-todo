import React, { useState, useContext, createContext, useEffect } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

interface IContext {
  Todo: {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  }
}

export const TodoContext = React.createContext<IContext['Todo'] | null>(null)

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isDone: false
        }
      ])
    }

    setTodo('')
  }

  useEffect(() => {
    setTodos([
      ...todos,
      {
        id: 1,
        todo: 'Your first task is to create a task!',
        isDone: false
      }
    ])
  }, [])

  return (
    <div className="app">
      <h1> Daily Task </h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoContext.Provider value={{todos, setTodos}}>
        <TodoList />
      </TodoContext.Provider>
    </div>
  )
}

export default App;
