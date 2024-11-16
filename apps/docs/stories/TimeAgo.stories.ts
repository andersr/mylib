import type { Meta, StoryObj } from "@storybook/react";
import { TimeAgoTest } from "./components/TimeAgo.tsx";

const meta = {
  title: "Utils/TimeAgo",
  component: TimeAgoTest,
  parameters: {},
} satisfies Meta<typeof TimeAgoTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isoDate: "2024-09-01",
  },
};
