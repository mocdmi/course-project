import { StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

const meta = {
    title: 'shared/CountrySelect',
    component: CountrySelect,
    args: {
    },
};

export default meta;

type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {};
