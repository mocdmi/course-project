import { ReactElement } from 'react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => ReactElement) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
