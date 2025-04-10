import { JSX, useContext, useRef } from "react";
import styles from "./Input.module.css";
import { TodosContext } from "../../context/context";
import { ITodo } from "../../types/types";

export default function Input(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const { todos, setTodos } = useContext(TodosContext);

  const handleAddTodo = () => {
    const value = inputRef.current?.value.trim();
    if (!value) return;

    const todo: ITodo = {
      id: Date.now(),
      text: value,
      completed: false,
    };

    setTodos([...todos, todo]);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="What needs to be done?"
      ref={inputRef}
      onKeyDown={handleKeyDown}></input>
  );
}
