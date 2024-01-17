import { vi } from "vitest";

export function mockShared() {
  console.log("mockShared()");
  vi.doMock("@vitest-shared-packages-mock-issue/shared", () => {
    console.log("doMock('@vitest-shared-packages-mock-issue/shared')");
    return {
      doStuff: vi.fn().mockImplementation(() => {
        console.log("doing stuff");
      }),
    };
  });
}
