import React, { FC, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useTodo } from "../../hooks/useTodo";
import cn from "classnames";

import styles from "./TodoAdd.module.scss";

const TodoAdd: FC = () => {
  const [value, setValue] = useState<string>("");
  const { addTodo } = useTodo();
  const { mode } = useTheme();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (value.trim()) {
        addTodo({
          title: value,
          isChecked: false,
          _id: crypto.randomUUID(),
        });
      }

      setValue("");
    }
  };

  return (
    <div
      className={cn(styles.todo__add, {
        [styles[`todo__add--${mode}`]]: mode,
      })}
    >
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Create a new todo..."
        className={styles["todo__add-input"]}
        type="text"
      />
    </div>
  );
};

export default TodoAdd;
