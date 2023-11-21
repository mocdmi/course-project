import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [StoreDecorator({ loginForm: { username: 'admin', password: '123' } })],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
    decorators: [StoreDecorator({ loginForm: { username: 'admin', password: '123', error: 'Error' } })],
};

export const Loading: Story = {
    decorators: [StoreDecorator({ loginForm: { username: 'admin', password: '123', isLoading: true } })],
};
