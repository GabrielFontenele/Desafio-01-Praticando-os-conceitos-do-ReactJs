import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Trash } from 'phosphor-react'
import {v4 as uuid4 } from 'uuid';

import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header';
import { TodoMaker } from './components/TodoMaker';
import { TodoTable } from './components/TodoTable';

export interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
}

const mocks: Todo[]= [
  // {
  //   id:  uuid4(),
  //   content: "todo 1",
  //   isCompleted: false
  // },
  // {
  //   id:  uuid4(),
  //   content: "todo 2",
  //   isCompleted: true
  // },
]


export function App() {
  const [todos, setTodos] = useState<Todo[]>(mocks);

  function handleDeleteTodo(id: string){
    const todosFiltered = todos.filter(todo => todo.id !== id)
    setTodos(todosFiltered);
  }

  function handleIsCompleted(id: string){
    const todosFiltered = todos.map(todo => {
      if(todo.id === id) todo.isCompleted =! todo.isCompleted
      return todo
    })
    setTodos(todosFiltered);
  }

  function handleAddTodo(content: string) {
    const newTodo = {
      id: uuid4(),
      content,
      isCompleted: false
    } 

    setTodos([...todos, newTodo]);
  }

  console.log("render")

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <TodoMaker
          handleAddTodo={handleAddTodo}
        />
        <div className={styles.todosBox}>
          <TodoTable
            todos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleIsCompleted={handleIsCompleted}
          />
        </div>
      </div>
    </div>
  )
}

