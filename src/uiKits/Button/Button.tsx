import { FC } from 'react';
import { Button as MantineButton } from '@mantine/core';
import { ButtonProps } from './Button.types';
import classes from './Button.module.css';

export const Button: FC<ButtonProps> = (props) => {
    return (
        <MantineButton
            classNames={{
                root: classes.root
            }}
            {...props} />
    );
};