import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Button } from "@andersco/ui";
// import Foo from "@vitest/spy"

// const Story = {
//   component: Button,
//   args: {
//     onClick: fn(),
//   },
// } satisfies Meta<typeof Button>;

// export default Story;

// export const Demo = {
//   play: async ({
//     args,
//     canvasElement,
//   }: {
//     args: { onClick: typeof fn };
//     canvasElement: HTMLElement;
//   }) => {
//     const canvas = within(canvasElement);
//     await userEvent.click(canvas.getByRole("button"));
//     await expect(args.onClick).toHaveBeenCalled();
//   },
// };

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {},
  args: { onClick: () => undefined },
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
