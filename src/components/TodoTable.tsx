import { Clipboard } from "phosphor-react";
import { Todo } from "../App";
import { TodoRow } from "./TodoRow";
import styles from './TodoTable.module.css'

interface TodoTableProps {
  todos: Todo[];
  handleDeleteTodo: (id: string) => void;
  handleIsCompleted: (id: string) => void;
}

export function TodoTable({todos, handleDeleteTodo, handleIsCompleted}: TodoTableProps){
  const totalTodos = todos.length;

  const completedTodos = todos.reduce(
    (total, todo) => {
      return todo.isCompleted ? total + 1 : total
    }, 0
  )

  const textCompleted = completedTodos ? `${completedTodos} de ${totalTodos}` : `${completedTodos}`
  
  let content;
  if(totalTodos){
    content = (
      <div className={styles.content}>
        {todos.map((todo: Todo) =>{
          return (
            <TodoRow 
              key={todo.id} 
              todo={todo} 
              handleDeleteTodo={handleDeleteTodo} 
              handleIsCompleted={handleIsCompleted} 
            />
          )
        })}
      </div>
    )
  }else{
    content = (
      <div className={styles.emptyContent}>
        <Clipboard size={56} opacity={"50%"} />
        <div className={styles.alert}>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    )
  }
  

  return (
    <>
      <header className={styles.header}>
        <div className={styles.created}>
          Tarefas criadas
          <span>{totalTodos}</span>
        </div>
        <div className={styles.completed}>
          Concluídas
          <span>{textCompleted}</span>
        </div>
      </header>
      {content}
    </>
  )
}