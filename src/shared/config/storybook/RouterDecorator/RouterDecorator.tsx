import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => ReactElement) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
