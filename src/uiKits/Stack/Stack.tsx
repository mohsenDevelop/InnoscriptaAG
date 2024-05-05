
import { FC } from 'react';
import { Stack as MantineStack } from '@mantine/core';
import { StackProps } from './Stack.types';

export const Stack: FC<StackProps> = (props) => {
    return (<MantineStack {...props} />);
};