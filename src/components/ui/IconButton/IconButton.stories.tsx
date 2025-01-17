import type { Meta, StoryObj } from '@storybook/react';
import { Search, ShoppingCart, ChevronLeft, X } from 'lucide-react';
import { IconButton } from './IconButton';

const meta = {
  title: 'UI/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: Search,
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    icon: ShoppingCart,
    variant: 'secondary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    icon: ChevronLeft,
    variant: 'outline',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    icon: X,
    variant: 'ghost',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    icon: Search,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    icon: Search,
    size: 'lg',
  },
};

export const Loading: Story = {
  args: {
    icon: Search,
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    icon: Search,
    disabled: true,
  },
};