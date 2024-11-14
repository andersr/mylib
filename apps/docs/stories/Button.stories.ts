import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "@andersco/ui";

const meta = {
  component: Button,
  parameters: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button Label",
  },
};

export const Styled: Story = {
  args: {
    children: "Button Label",
    twStyle: "p-4 bg-blue-500 text-white",
  },
};
