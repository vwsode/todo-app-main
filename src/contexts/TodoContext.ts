import { createContext } from "react";
import { ITodo, ITodoState } from "../types/todo.type";

interface TodoContextProps {
  state: ITodoState;
  toggleTodo: (_id: string) => void;
  deleteTodo: (_id: string) => void;
  deleteCompletedTodos: () => void;
  addTodo: (todo: ITodo) => void;
  todoCount: number;
}

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
