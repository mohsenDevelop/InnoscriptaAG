import { FC } from 'react';
import { Flex as MantineFlex } from '@mantine/core';
import { FlexProps } from './Flex.types';

export const Flex: FC<FlexProps> = (props) => {
    return (<MantineFlex {...props} />);
};