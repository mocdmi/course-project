import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginForm } from './getLoginForm';

describe('getLogin', () => {
    test('should return loginForm', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '123',
                isLoading: false,
                error: '',
            },
        };

        expect(getLoginForm(state as StateSchema)).toEqual({
            username: 'admin',
            password: '123',
            isLoading: false,
            error: '',
        });
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginForm(state as StateSchema)).toEqual(undefined);
    });
});
