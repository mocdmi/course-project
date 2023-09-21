import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from '../getLogin/getLogin';

export const getLoginForm = createSelector(
    getLogin,
    (loginForm) => loginForm?.error || ''
);
