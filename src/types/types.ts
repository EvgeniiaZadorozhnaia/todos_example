export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITodosContext {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export interface ItodoItemsProps {
  todo: ITodo;
}

export interface ITodoListProps {
  todos: ITodo[];
}

export interface IRoute {
  to: string;
  label: string;
}