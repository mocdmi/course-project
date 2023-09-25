import { createSelector } from '@reduxjs/toolkit';
import { getLoginForm } from '../getLoginForm/getLoginForm';

export const getLoginError = createSelector(
    getLoginForm,
    (loginForm) => loginForm?.error || ''
);
