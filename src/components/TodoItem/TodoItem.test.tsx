import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoItem from "./TodoItem";
import { TodosContext } from "../../context/context";
import { ITodo } from "../../types/types";
import { vi } from "vitest";

const mockSetTodos = vi.fn();
const mockTodos: ITodo[] = [
  { id: 1, text: "Test Todo 1", completed: false },
  { id: 2, text: "Test Todo 2", completed: true },
];

const renderTodoItem = (todo: ITodo) => {
  render(
    <TodosContext.Provider value={{ todos: mockTodos, setTodos: mockSetTodos }}>
      <TodoItem todo={todo} />
    </TodosContext.Provider>
  );
};

describe("TodoItem component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render the todo text", () => {
    const todo = mockTodos[0];
    renderTodoItem(todo);
    expect(screen.getByText(todo.text)).toBeInTheDocument();
  });

  it("should display the checkbox as checked if the todo is completed", () => {
    const todo = mockTodos[1];
    renderTodoItem(todo);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it("should call setTodos to update todo completion status", () => {
    const todo = mockTodos[0];
    renderTodoItem(todo);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

    fireEvent.click(checkbox);

    expect(mockSetTodos).toHaveBeenCalled();
  });
});
