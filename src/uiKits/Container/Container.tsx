import { FC } from 'react';
import { Container as MantineContainer } from '@mantine/core';
import { ContainerProps } from './Container.types';

export const Container: FC<ContainerProps> = ({ children, ...props }) => {
    return (
        <MantineContainer  {...props}>
            {children}
        </MantineContainer >
    );
};
