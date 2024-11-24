import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@andersco/ui";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    iconName: "search",
  },
};

export const Styled: Story = {
  args: {
    iconName: "search",
    iconStyles: "text-blue-500 text-5xl",
  },
};
