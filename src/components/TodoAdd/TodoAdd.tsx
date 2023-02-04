import React, { FC, useState } from 'react';
import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';
import { useTodo } from '../../hooks/useTodo';

import styles from './TodoAdd.module.scss';
import Button from '../ui/Button';

const TodoAdd: FC = () => {
    const [value, setValue] = useState<string>('');
    const { addTodo } = useTodo();
    const { mode } = useTheme();

    const handleAddTodo = () => {
        if (value.trim()) {
            addTodo({
                title: value,
                isChecked: false,
                _id: crypto.randomUUID(),
            });
        }

        setValue('');
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div
            className={cn(styles.todo__add, {
                [styles[`todo__add--${mode}`]]: mode,
            })}
        >
            <Button onClick={handleAddTodo} variant="text">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                    <path
                        fill="#494C6B"
                        fillRule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                    />
                </svg>
            </Button>
            <input
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Create a new todo..."
                className={styles['todo__add-input']}
                type="text"
            />
        </div>
    );
};

export default TodoAdd;
