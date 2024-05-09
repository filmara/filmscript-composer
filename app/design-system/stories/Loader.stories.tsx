// Menu.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '~/styles/index.css';

import { Loader } from '../components/Loader'; // Adjust the import path as needed

const meta: Meta<typeof Loader> = {
  component: Loader,
  // Add other meta configurations if needed, such as argTypes for controls
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  render: () => <Loader />,
};
