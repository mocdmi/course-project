import { StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

const meta = {
    title: 'shared/CurrencySelect',
    component: CurrencySelect,
    args: {
    },
};

export default meta;

type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {};
