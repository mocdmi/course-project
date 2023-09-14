import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Inverted: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.INVERTED,
    },
};

export const InvertedDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};

export const RedDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
