import { expect, test, vi } from "vitest";
import { timeAgo } from "./timeAgo";

describe("timeAgo", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("returns a relative date for the current date", () => {
    expect(timeAgo(new Date())).toBe("moments ago");
  });

  test("returns a relative date for a date that is in the past", () => {
    const date = new Date("2024-11-01");
    vi.setSystemTime(date);

    const oneMonthAgo = new Date("2024-10-01");
    expect(timeAgo(oneMonthAgo)).toBe("a month ago");
  });

  test("returns a relative date for a date that is in the future", () => {
    const date = new Date("2024-11-01");
    vi.setSystemTime(date);

    const inOneMonth = new Date("2024-12-01");
    expect(timeAgo(inOneMonth)).toBe("in a month");
  });
});
