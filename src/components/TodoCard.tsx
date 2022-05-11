import React, { useState } from "react";
import { Todo } from '../model';

interface IProps {
  todo: Todo,
  deleteTodoCard: (id: string) => void,
  updateTodo: (id: number, editedTodo: string) => void
}

const TodoCard = ({todo, deleteTodoCard, updateTodo}: IProps) => {
  const [onEditMode, setOnEditmode] = useState<boolean>(false)
  const [editedTodo, setEditedTodo] = useState<string>(todo.todo)
  const [isDone, setIsDone] = useState<boolean>(false)

  const updateTodoCard = () => {
    updateTodo(todo.id, editedTodo)
    setOnEditmode(false)
  }

  return (
    <li> 
      {
        // If on edite mode + not done yet
        onEditMode && !isDone ?
          <input type="text" 
            value={editedTodo} 
            onChange={(e: React.ChangeEvent) => setEditedTodo((e.target as HTMLInputElement).value)} 
            onBlur={updateTodoCard}
          /> :
          //IF already done
          isDone ?
            <s> { todo.todo }  </s>
            //If not done and not on edit mode
            : <p> { todo.todo }  </p>
      }

      <div className="todo__buttons">
        <span className="todo__button" onClick={() => deleteTodoCard(todo.id+'')}> 🗑 </span>
        <span className="todo__button" onClick={() => setOnEditmode(true)}> ✎ </span>
        <span className="todo__button" onClick={() => setIsDone(true)}> ✓ </span>
      </div>
  </li>
  )
}

export default TodoCard