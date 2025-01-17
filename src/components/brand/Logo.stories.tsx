import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta = {
  title: 'Brand/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    variant: 'icon',
  },
};

export const Full: Story = {
  args: {
    variant: 'full',
  },
};

export const Horizontal: Story = {
  args: {
    variant: 'horizontal',
  },
};