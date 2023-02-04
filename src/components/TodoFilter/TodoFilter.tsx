import React, { FC } from "react";
import cn from "classnames";

import { useTodo } from "../../hooks/useTodo";
import { useTheme } from "../../hooks/useTheme";

import Button from "../ui/Button";

import styles from "./TodoFilter.module.scss";

const TodoFilter: FC = () => {
  const { deleteCompletedTodos, todoCount } = useTodo();
  const { mode } = useTheme();

  return (
    <div
      className={cn(styles.todo__filter, {
        [styles[`todo__filter--${mode}`]]: mode,
      })}
    >
      <div className={styles["todo__filter-items"]}>{todoCount} items left</div>
      <div className={styles["todo__filter-controls"]}>
        <Button variant="text">All</Button>
        <Button variant="text">Active</Button>
        <Button variant="text">Completed</Button>
      </div>
      <Button variant="text" onClick={deleteCompletedTodos}>
        Clear Completed
      </Button>
    </div>
  );
};

export default TodoFilter;
