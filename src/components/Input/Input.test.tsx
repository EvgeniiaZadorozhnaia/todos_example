import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";
import { TodosContext } from "../../context/context";
import { ITodo } from "../../types/types";
import { vi } from "vitest";

const mockSetTodos = vi.fn();
const mockTodos: ITodo[] = [];

const renderInput = () => {
  render(
    <TodosContext.Provider value={{ todos: mockTodos, setTodos: mockSetTodos }}>
      <Input />
    </TodosContext.Provider>
  );
};

describe("Input component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should add todo when Enter is pressed", async () => {
    renderInput();
    const inputElement = screen.getByPlaceholderText(
      "What needs to be done?"
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "New Todo" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(mockSetTodos).toHaveBeenCalledWith([
      { id: expect.any(Number), text: "New Todo", completed: false },
    ]);
  });

  it("should not add todo if input is empty", async () => {
    renderInput();
    const inputElement = screen.getByPlaceholderText(
      "What needs to be done?"
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(mockSetTodos).not.toHaveBeenCalled();
  });

  it("should clear the input after adding a todo", async () => {
    renderInput();
    const inputElement = screen.getByPlaceholderText(
      "What needs to be done?"
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "New Todo" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(inputElement.value).toBe("");
  });
});
