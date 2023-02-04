import React, { FC, HTMLProps } from 'react';
import cn from 'classnames';

import { useTheme } from '../../../hooks/useTheme';

import styles from './Checkbox.module.scss';

type CheckboxProps = HTMLProps<HTMLInputElement> & {
    isChecked: boolean;
};

const Checkbox: FC<CheckboxProps> = ({ isChecked, ...props }) => {
    const { mode } = useTheme();
    return (
        <input
            checked={isChecked}
            className={cn(styles.checkbox, {
                [styles[`checkbox--${mode}`]]: mode,
            })}
            type="checkbox"
            {...props}
        />
    );
};

export default Checkbox;
