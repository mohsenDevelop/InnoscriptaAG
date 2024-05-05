import { FC } from 'react';
import { Text as MantineText } from '@mantine/core';
import { TextProps } from './Text.types';

export const Text: FC<TextProps> = (props) => {
    return (<MantineText {...props} />);
};