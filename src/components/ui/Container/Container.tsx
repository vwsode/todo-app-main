import React, { FC, ReactNode } from "react";
import cn from "classnames";

import { Size } from "../../../types/base.type";

import styles from "./Container.module.scss";

type ContainerProps = {
  size: Size;
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children, size }) => {
  return (
    <div
      className={cn(styles.container, {
        [styles[`container--${size}`]]: size,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
