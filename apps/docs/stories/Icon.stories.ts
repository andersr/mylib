import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@andersco/ui";

const meta = {
  component: Icon,
  parameters: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "search",
  },
};
