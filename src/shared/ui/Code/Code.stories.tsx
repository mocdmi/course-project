import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
    args: {
        text: `<!DOCTYPE html>
<html lang="en">
<body>
    <p id="hello"></p>
    <script>
        document.getElementById("hello").innerHTML = "Hello, world!";
    </script>
</body>
</html>`,
    },
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
