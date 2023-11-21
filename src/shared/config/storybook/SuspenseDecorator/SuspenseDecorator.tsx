import { ReactElement, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

export const SuspenseDecorator = () => (StoryComponent: () => ReactElement) => (
    <Suspense fallback={<Loader />}>
        <StoryComponent />
    </Suspense>
);
