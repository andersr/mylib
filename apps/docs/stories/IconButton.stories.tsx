import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { within } from '@storybook/testing-library';
// import { userEvent, waitFor, within, expect, fn } from '@storybook/test';

import { IconButton } from "@andersco/ui";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    iconName: "delete",
  },
};

export const Styled: Story = {
  args: {
    iconName: "search",
    iconStyles: "text-blue-500 text-5xl",
    onClick: action("Button clicked"),
  },
};
