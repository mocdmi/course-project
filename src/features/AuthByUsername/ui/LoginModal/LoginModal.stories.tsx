import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginModal } from './LoginModal';

const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
};

export default meta;

type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {
    args: {
        isOpen: true,
    },
    decorators: [
        StoreDecorator({ loginForm: { username: 'admin', password: '123' } }),
    ],
};

export const PrimaryDark: Story = {
    args: {
        isOpen: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({ loginForm: { username: 'admin', password: '123' } }),
    ],
};
