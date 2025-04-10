import { JSX } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from "./TodoList.module.css";
import { ITodoListProps } from '../../types/types';

export default function TodoList({todos}: ITodoListProps): JSX.Element {

  return (
    <div className={styles.todolist}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
