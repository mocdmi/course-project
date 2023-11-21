import { StoryObj } from '@storybook/react';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import { Avatar } from './Avatar';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    args: {
        src: AvatarImg,
    },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: 150,
    },
};
