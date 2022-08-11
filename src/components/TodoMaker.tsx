import styles from './TodoMaker.module.css'
import { PlusCircle } from 'phosphor-react'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


interface TodoMakerProps {
  handleAddTodo: (content: string) => void
}

export function TodoMaker({ handleAddTodo }: TodoMakerProps ) {
  const [newTodo, setNewTodo] = useState('');

  function handleNewTodoChange (event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTodo(event.target.value)
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }
  
  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault()
    handleAddTodo(newTodo)
    setNewTodo('')
  }
  
  const isNewTodoEmpty = newTodo.length === 0;

  return (
    <form onSubmit={handleCreateNewTodo} className={styles.todoForm}>
      <input 
        name='todo'
        placeholder='Adicione uma nova tarefa'
        value={newTodo} 
        onChange={handleNewTodoChange}
        onInvalid={handleNewTodoInvalid}
        required
      />
      <button type='submit' disabled={isNewTodoEmpty}>
        Criar 
        <PlusCircle size={16}/>
      </button>
    </form>
  )
}