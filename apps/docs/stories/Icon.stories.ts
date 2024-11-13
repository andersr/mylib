import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@andersco/ui";

const meta = {
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    name: "search",
  },
};

export const Styled: Story = {
  args: {
    name: "delete_forever",
    twStyle: "text-orange-500 text-8xl",
  },
};
