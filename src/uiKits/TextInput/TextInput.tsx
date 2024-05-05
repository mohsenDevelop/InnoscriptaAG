import { FC } from 'react';
import { TextInput as MantineTextInput } from '@mantine/core';

import { TextInputProps } from './TextInput.types';
import classes from './TextInput.module.css';

export const TextInput: FC<TextInputProps> = (props) => {
    return (
        <MantineTextInput
            classNames={{
                input: classes.input,
            }}
            {...props}
        />
    );
};
