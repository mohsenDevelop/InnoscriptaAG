import { MantineProvider, DirectionProvider } from '@mantine/core';

import { theme } from '@themes';

export const ThemProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <DirectionProvider initialDirection='ltr'>
            <MantineProvider theme={theme}>{children}</MantineProvider>
        </DirectionProvider>
    );
};