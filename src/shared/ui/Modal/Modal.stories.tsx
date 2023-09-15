import { StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        children: `
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A aliquid blanditiis, cum exercitationem explicabo fugit ipsum
            labore nulla odit rerum sapiente tempora veniam vitae voluptate voluptates!
            Atque doloribus facere repudiandae!
        `,
        isOpen: true,
    },
};
