import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComponent: () => ReactElement) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
