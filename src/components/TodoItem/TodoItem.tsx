import React, { FC, useState } from 'react';
import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';
import { useTodo } from '../../hooks/useTodo';

import { ITodo } from '../../types/todo.type';

import Checkbox from '../ui/Checkbox';

import styles from './TodoItem.module.scss';

type TodoItemProps = {
    todo: ITodo;
};

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const { title, isChecked, _id } = todo;
    const { deleteTodo, toggleTodo } = useTodo();
    const { mode } = useTheme();

    return (
        <div
            className={cn(styles.todo, {
                [styles[`todo--${mode}`]]: mode,
                [styles[`todo--checked`]]: isChecked,
            })}
        >
            <div className={styles.todo__wrap}>
                <label className={styles.todo__label}>
                    <Checkbox onChange={() => toggleTodo(_id)} isChecked={isChecked} />
                    <span className={styles.todo__title}>{title}</span>
                </label>
                <div className={styles.todo__controls}>
                    <button onClick={() => deleteTodo(_id)} className={styles.todo__delete}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                            <path
                                fill="#494C6B"
                                fillRule="evenodd"
                                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
