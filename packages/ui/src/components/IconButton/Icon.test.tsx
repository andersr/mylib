import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IconButton } from "./IconButton";
import { vi } from "vitest";

test("allows for clicking on the button", async () => {
  // ARRANGE
  const mockCallback = vi.fn();
  const iconName = "search";
  render(<IconButton iconName={iconName} onClick={mockCallback} />);

  // ACT
  await userEvent.click(screen.getByTitle(iconName));

  // ASSERT
  expect(mockCallback).toHaveBeenCalled();
});
