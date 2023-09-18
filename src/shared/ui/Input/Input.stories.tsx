import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123456',
    },
};

export const PrimaryDark: Story = {
    args: {
        placeholder: 'Type text',
        value: '123456',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
