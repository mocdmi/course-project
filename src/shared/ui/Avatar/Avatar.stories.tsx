import { StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './stories.jpg';

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
