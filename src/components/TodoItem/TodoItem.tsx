import { Checkbox } from "antd";
import styles from "./TodoItem.module.css";
import { JSX, useContext } from "react";
import { TodosContext } from "../../context/context";
import { ITodo, ItodoItemsProps } from '../../types/types';

export default function TodoItem({ todo }: ItodoItemsProps): JSX.Element {
  const { setTodos } = useContext(TodosContext);

  const toggleStatus = (id: number) => {
    setTodos((prevTodos): ITodo[] =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleChange = (id: number) => {
    toggleStatus(id);
  };

  return (
    <>
      <Checkbox
        onChange={() => handleChange(todo.id)}
        checked={todo.completed}
        className={`${styles.todoitem} ${
          todo.completed ? styles.completed : ""
        }`}>
        {todo.text}
      </Checkbox>
    </>
  );
}
