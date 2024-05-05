import { Image as MantineImage, PolymorphicComponentProps, ImageProps } from '@mantine/core';

export const Image = (props: PolymorphicComponentProps<'img', ImageProps>) => {
    return <MantineImage {...props} />;
};