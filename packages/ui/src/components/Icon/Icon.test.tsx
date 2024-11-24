import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";

test("renders the icon", async () => {
  // ARRANGE
  render(<Icon iconName="search" />);

  // ACT

  // ASSERT
  expect(screen.getByTitle("search")).toBeDefined();
});
