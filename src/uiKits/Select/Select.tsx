
import { FC } from 'react';
import { Select as MantineSelect } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

import { SelectProps } from './Select.types';
import classes from './Select.module.css';

export const Select: FC<SelectProps> = (props) => {
    return (
        <MantineSelect
            classNames={{ input: classes.input }}
            rightSection={<IconChevronDown width={16} height={16} />}
            {...props}
        />);
};