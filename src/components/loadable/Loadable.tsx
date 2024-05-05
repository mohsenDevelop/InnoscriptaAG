import { ElementType, Suspense } from 'react';
import { NavigationProgress } from '@mantine/nprogress';

export const Loadable = (Component: ElementType) => (props: any) => (
    <Suspense fallback={<NavigationProgress />}>
        <Component {...props} />
    </Suspense>
);
