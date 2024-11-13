import type { Preview } from "@storybook/react";

import "@andersco/ui/dist/style.css";
import "../stories/tailwind.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
