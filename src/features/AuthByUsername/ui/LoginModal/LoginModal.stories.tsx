import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
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
};

export const PrimaryDark: Story = {
    args: {
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
