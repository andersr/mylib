import type { Meta, StoryObj } from "@storybook/react";

import { Required } from "@andersco/ui";

const meta = {
  title: "Components/Required",
  component: Required,
  parameters: {},
} satisfies Meta<typeof Required>;

export default meta;
type Story = StoryObj<typeof Required>;

export const Primary: Story = {};

/*
 * Example Required with form label
 */
const RequiredWithLabel = () => {
  return (
    <label>
      Form Label
      <Required />
    </label>
  );
};

export const Example: Story = {
  render: () => <RequiredWithLabel />,
};
