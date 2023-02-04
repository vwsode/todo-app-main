import React, { FC, ReactNode, HTMLAttributes } from "react";
import cn from "classnames";

import { Size } from "../../../types/base.type";

import styles from "./Button.module.scss";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: Size;
  variant: "outlined" | "filled" | "text";
};

const Button: FC<ButtonProps> = ({
  size = "sm",
  variant = "outlined",
  children,
  ...props
}) => {
  return (
    <button
      className={cn(styles.btn, {
        [styles[`btn--${size}`]]: size,
        [styles[`btn--${variant}`]]: variant,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
