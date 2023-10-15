import { StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    args: {
        label: 'Выберите значение',
        options: [
            { value: '123', content: 'Первый пункт' },
            { value: '1234', content: 'Второй пункт' },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
    },
};
