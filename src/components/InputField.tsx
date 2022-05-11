import React from "react";

interface IProps {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void
}

const InputField = ({todo, setTodo, handleAdd}: IProps) => {
  return (
    <form onSubmit={handleAdd}>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Enter a task" />
      <button type="submit"> Go </button>
    </form>
  )
}

export default InputField