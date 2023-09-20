import { ReactElement } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: () => ReactElement) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
