import React, {useState, useEffect} from 'react';
import { TodoList } from '../components/TodoList';
import { TodoForm } from '../components/TodoForm';
import { ITodo } from '../interfaces';


declare var confirm: (query: string) => boolean

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos]);
    setTodos((prev) => [newTodo, ...prev]);
  }

  const toggleHandler = (id: number) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed};
      }

      return todo
    }
    ))
  }
  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure you want to remove?')

    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }
  }
  return (
    <>
      <TodoForm  onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  )
}
