import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from '../getLogin/getLogin';

export const getLoginIsLoading = createSelector(
    getLogin,
    (loginForm) => loginForm?.isLoading || false
);
