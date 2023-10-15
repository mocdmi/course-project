import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    args: {
        placeholder: 'Type text',
        value: '123456',
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
