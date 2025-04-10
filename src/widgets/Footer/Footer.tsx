import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { JSX, useContext } from "react";
import { TodosContext } from "../../context/context";
import { IRoute } from "../../types/types";

export default function Footer(): JSX.Element {
  const { todos, setTodos } = useContext(TodosContext);

  const routes: IRoute[] = [
    { to: "/", label: "All" },
    { to: "/active", label: "Active" },
    { to: "/completed", label: "Completed" },
  ];

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const completedCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className={styles.footer}>
      {completedCount > 0 ? <div>{completedCount} items left</div> : "Empty"}
      <nav className={styles.links}>
        {routes.map((route) => (
          <NavLink
            key={route.to}
            to={route.to}
            className={({ isActive }) => (isActive ? styles.active : "")}>
            {route.label}
          </NavLink>
        ))}
      </nav>
      <button className={styles.btn} onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
}
