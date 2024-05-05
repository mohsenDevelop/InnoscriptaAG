import { Input as MantineInput, InputProps, PolymorphicComponentProps } from '@mantine/core';

export const Input = (props: PolymorphicComponentProps<'input', InputProps>) => {
    return <MantineInput size={'md'} {...props} />;
};