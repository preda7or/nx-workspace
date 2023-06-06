import { Meta, StoryObj } from '@storybook/angular';

import { Example1Component } from './example1.component';

const meta: Meta<Example1Component> = {
  title: 'Example1Component',
  component: Example1Component,
} as Meta<Example1Component>;

export default meta;
type Story = StoryObj<Example1Component>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    disabled: false,
    value: 'foo',
  },
};
