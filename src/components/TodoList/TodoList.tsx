import React, { FC } from 'react';
import cn from 'classnames';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

import { useTheme } from '../../hooks/useTheme';
import { useTodo } from '../../hooks/useTodo';

import TodoItem from '../TodoItem';

import styles from './TodoList.module.scss';
import { ITodo } from '../../types/todo.type';

const TodoList: FC = () => {
    const { state, reorderTodos } = useTodo();
    const { mode } = useTheme();

    const reorder = <T,>(list: Array<T>, startIndex: number, endIndex: number): Array<T> => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }
        const items = reorder<ITodo>(state.todos, result.source.index, result.destination.index);
        reorderTodos(items);
    };

    return (
        <div
            className={cn(styles['wrapper'], {
                [styles[`wrapper--${mode}`]]: mode,
            })}
        >
            {state.todos.length ? (
                <DragDropContext onDragEnd={(param) => handleOnDragEnd(param)}>
                    <Droppable droppableId="droppable-1">
                        {(provided) => (
                            <ul
                                className={styles.todo__list}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {state.todos.map((todo, index) => (
                                    <Draggable
                                        key={todo._id}
                                        draggableId={'draggble-' + todo._id}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <li
                                                className={styles.todo__item}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <TodoItem todo={todo} />
                                            </li>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            ) : (
                <span className={styles['todo__list-message']}>No tasks yet :(</span>
            )}
        </div>
    );
};

export default TodoList;
