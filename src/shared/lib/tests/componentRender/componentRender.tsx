import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ReactNode } from 'react';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};
