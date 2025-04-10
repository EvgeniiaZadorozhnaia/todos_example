import { JSX, useContext } from "react";
import Input from "../../components/Input/Input";
import TodoList from "../../components/TodoList/TodoList";
import { TodosContext } from "../../context/context";
import styles from "./All.module.css";

export default function All(): JSX.Element {
  const { todos } = useContext(TodosContext);

  return (
    <>
      <div className={styles.wrapper}>
        <Input />
      </div>
      <TodoList todos={todos} />
    </>
  );
}
