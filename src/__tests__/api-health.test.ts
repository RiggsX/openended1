import { describe, it, expect } from "vitest";

describe("API health endpoint", () => {
  it("returns correct response shape", async () => {
    // Import the route handler
    const { GET } = await import("@/app/api/health/route");
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({
      name: "OPENENDED API",
      version: "0.1.0",
      status: "ok",
    });
  });
});
