import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
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

export default meta;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {};

export const Dark: Story = {
    parameters: {
        loki: {
            skip: true,
        },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
