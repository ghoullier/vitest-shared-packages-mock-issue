import { test, expect } from "vitest";

import { doStuff } from "@vitest-shared-packages-mock-issue/shared";

test("doStuff() should be mocked", () => {
  expect(doStuff.mockImplementation).toBeDefined();
});
