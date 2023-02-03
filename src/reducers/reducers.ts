import { ITodo, ITodoState } from "../types/todo.type";

type TodoActions =
  | { type: "ADD_TODO"; payload: ITodo }
  | { type: "DELETE_TODO"; payload: { _id: string } }
  | { type: "TOGGLE_TODO"; payload: { _id: string } }
  | { type: "SHOW_ALL_TODOS" }
  | { type: "DELETE_COMPLETED_TODOS" }
  | { type: "SHOW_ACTIVE_TODOS" }
  | { type: "SHOW_COMPLETED_TODOS" };

export const todoReducer = (state: ITodoState, action: TodoActions) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload._id),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo._id === action.payload._id) {
            todo.isChecked = !todo.isChecked;
          }

          return todo;
        }),
      };
    case "DELETE_COMPLETED_TODOS":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isChecked),
      };
    case "SHOW_ACTIVE_TODOS":
      return state;
    case "SHOW_ALL_TODOS":
      return state;
    case "SHOW_COMPLETED_TODOS":
      return state;
    default:
      return state;
  }
};
