// Menu.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '~/styles/index.css';

import { Menu } from '../components/Menu'; // Adjust the import path as needed

const meta: Meta<typeof Menu> = {
  component: Menu,
  // Add other meta configurations if needed, such as argTypes for controls
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => <Menu buttonLabels={['Button 1', 'Button 2', 'Button 3']} />,
};

export const WithManyButtons: Story = {
  render: () => <Menu buttonLabels={['Home', 'Products', 'About Us', 'Contact']} />,
};
