import { createContext } from "react";
import { ITodosContext } from "../types/types";

const initialTodosContext: ITodosContext = {
  todos: [],
  setTodos: () => {},
};

export const TodosContext = createContext<ITodosContext>(initialTodosContext);
