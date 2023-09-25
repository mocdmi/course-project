import { createSelector } from '@reduxjs/toolkit';
import { getLoginForm } from '../getLoginForm/getLoginForm';

export const getLoginUsername = createSelector(
    getLoginForm,
    (loginForm) => loginForm?.username || ''
);
