import { CheckCircle, Trash } from "phosphor-react";
import { Todo } from "../App";
import styles from './TodoRow.module.css'

interface TodoRowProps {
  todo: Todo;
  handleDeleteTodo: (id: string) => void
  handleIsCompleted: (id: string) => void
}

export function TodoRow({ todo, handleDeleteTodo, handleIsCompleted }:TodoRowProps){

  const checkClass = todo.isCompleted ? styles.checkboxChecked : styles.checkboxUnchecked;
  const contentClass = !todo.isCompleted ? styles.todoContent : styles.todoContentStrike;

  return (
    <div className={styles.todoBox}>
      <img 
        alt="checkbox" 
        onClick={() => handleIsCompleted(todo.id)}
        className={checkClass}
      />

      <div className={contentClass}>
        {todo.content}
      </div>

      <button onClick={() => handleDeleteTodo(todo.id)} >
        <Trash/>
      </button>
        
    </div>
  )
}