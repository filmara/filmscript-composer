import type { Meta, StoryObj } from '@storybook/react';
import '~/styles/index.css';

import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button text="Button" />,
};