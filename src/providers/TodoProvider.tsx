import { FC, ReactNode, useReducer } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { todoReducer } from '../reducers/reducers';

import { ITodoState, ITodo } from '../types/todo.type';

const initialState: ITodoState = {
    todos: [
        {
            _id: crypto.randomUUID(),
            title: 'Complete online JavaScript course',
            isChecked: true,
        },
        {
            _id: crypto.randomUUID(),
            title: 'Jag around the park 3x',
            isChecked: false,
        },
        {
            _id: crypto.randomUUID(),
            title: '10 minutes meditaion',
            isChecked: false,
        },
        {
            _id: crypto.randomUUID(),
            title: 'Read for 1 hour',
            isChecked: false,
        },
        {
            _id: crypto.randomUUID(),
            title: 'Pick up groceries',
            isChecked: false,
        },
        {
            _id: crypto.randomUUID(),
            title: 'Complete Todo App on Frontend Mentor',
            isChecked: false,
        },
    ],
    todoCount: 6,
};

type TodoProviderProps = {
    children: ReactNode;
};

export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const toggleTodo = (_id: string) => {
        dispatch({ type: 'TOGGLE_TODO', payload: { _id } });
    };

    const deleteTodo = (_id: string) => {
        dispatch({ type: 'DELETE_TODO', payload: { _id } });
    };

    const addTodo = (todo: ITodo) => {
        dispatch({ type: 'ADD_TODO', payload: todo });
    };

    const deleteCompletedTodos = () => {
        dispatch({ type: 'DELETE_COMPLETED_TODOS' });
    };

    const reorderTodos = (todos: ITodo[]) => {
        dispatch({ type: 'DRAG_TODO', payload: { reordered: todos } });
    };

    return (
        <TodoContext.Provider
            value={{
                state,
                toggleTodo,
                deleteTodo,
                addTodo,
                deleteCompletedTodos,
                reorderTodos,
                todoCount: state.todos.length,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
