import React, { FC } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useTodo } from "../../hooks/useTodo";
import TodoItem from "../TodoItem";
import cn from "classnames";

import styles from "./TodoList.module.scss";

const TodoList: FC = () => {
  const { state } = useTodo();
  const { mode } = useTheme();

  return (
    <div
      className={cn(styles["wrapper"], {
        [styles[`wrapper--${mode}`]]: mode,
      })}
    >
      {state.todos.length ? (
        <ul className={styles.todo__list}>
          {state.todos.map((todo) => (
            <li className={styles.todo__item} key={crypto.randomUUID()}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      ) : (
        <span className={styles["todo__list-message"]}>No task yet :(</span>
      )}
    </div>
  );
};

export default TodoList;
