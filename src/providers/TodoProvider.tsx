import { FC, ReactNode, useReducer } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { todoReducer } from "../reducers/reducers";

import { ITodoState, ITodo } from "../types/todo.type";

const initialState: ITodoState = {
  todos: [],
  todoCount: 0,
};

type TodoProviderProps = {
  children: ReactNode;
};

export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const toggleTodo = (_id: string) => {
    dispatch({ type: "TOGGLE_TODO", payload: { _id } });
  };

  const deleteTodo = (_id: string) => {
    dispatch({ type: "DELETE_TODO", payload: { _id } });
  };

  const addTodo = (todo: ITodo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const deleteCompletedTodos = () => {
    dispatch({ type: "DELETE_COMPLETED_TODOS" });
  };

  return (
    <TodoContext.Provider
      value={{
        state,
        toggleTodo,
        deleteTodo,
        addTodo,
        deleteCompletedTodos,
        todoCount: state.todos.length,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
