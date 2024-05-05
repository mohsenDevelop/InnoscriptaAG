import { TextProps as MantineTextProps } from '@mantine/core';
import { ReactNode } from 'react';

export type TextProps = MantineTextProps & { children: ReactNode, onClick?: () => void; }