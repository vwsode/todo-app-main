import { ITodo, ITodoState } from '../types/todo.type';

type TodoActions =
    | { type: 'ADD_TODO'; payload: ITodo }
    | { type: 'DELETE_TODO'; payload: { _id: string } }
    | { type: 'TOGGLE_TODO'; payload: { _id: string } }
    | { type: 'DRAG_TODO'; payload: { reordered: ITodo[] } }
    | { type: 'DELETE_COMPLETED_TODOS' };

export const todoReducer = (state: ITodoState, action: TodoActions) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo._id !== action.payload._id),
            };
        case 'DELETE_COMPLETED_TODOS':
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.isChecked),
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo._id === action.payload._id) {
                        todo.isChecked = !todo.isChecked;
                    }
                    return todo;
                }),
            };
        case 'DRAG_TODO':
            return {
                ...state,
                todos: action.payload.reordered,
            };
        default:
            return state;
    }
};
