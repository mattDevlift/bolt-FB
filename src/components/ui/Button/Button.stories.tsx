import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: 'Button',
    variant: 'primary-outline',
    size: 'medium',
  },
};

export const SecondaryOutline: Story = {
  args: {
    children: 'Button',
    variant: 'secondary-outline',
    size: 'medium',
  },
};

export const Alt: Story = {
  args: {
    children: 'Button',
    variant: 'alt',
    size: 'medium',
  },
};

export const AltWithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'alt-icon',
    size: 'medium',
    withIcon: true,
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};