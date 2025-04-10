import { JSX, useContext, useMemo } from "react";
import { TodosContext } from "../../context/context";
import TodoList from '../../components/TodoList/TodoList';

export default function Active(): JSX.Element {
  const { todos } = useContext(TodosContext);

  const activeTodos = useMemo(() => {
    return todos.filter((todo) => !todo.completed);
  }, [todos]);
  return (
    <>
      <TodoList todos={activeTodos} />
    </>
  );
}
