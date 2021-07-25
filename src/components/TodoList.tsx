import React from 'react';
import { ITodo } from '../interfaces';


type TodoListProps = {
  todos: ITodo[],
  onToggle(id: number): void,
  onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onRemove
}) => {
  if (!todos.length) {
    return <p className="center">No Tasks Yet!</p>
  }

  const removeHandler = (event: React.MouseEvent, id: number): void => {
    event.preventDefault();
    onRemove(id);
  }

  return (
    <ul>
      {todos.map((todo) => {
        const {title, id, completed} = todo;
        return (
          <li className={`todo ${completed ? 'completed' : ''}`} key={id}>
            <label>
              <input
                type="checkbox"
                checked={completed}
                onChange={onToggle.bind(null, id)}
              />
              <span>{title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => removeHandler(event, id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}

    </ul>
  )
}
