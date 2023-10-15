import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        theme: TextTheme.ERROR,
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyText: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
