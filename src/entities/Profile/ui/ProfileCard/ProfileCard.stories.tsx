import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
        data: {
            first: 'Дмитрий',
            lastname: 'Мосин',
            age: 36,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Череповец',
            username: 'admin',
            avatar: AvatarImg,
        },
    },
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
    args: {
        error: 'error',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
