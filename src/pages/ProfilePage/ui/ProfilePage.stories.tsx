import { StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [
        SuspenseDecorator(),
        StoreDecorator({
            profile: {
                form: {
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
        }),
    ],
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
