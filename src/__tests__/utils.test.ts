import { describe, it, expect } from "vitest";
import { cn, formatPrice, slugify } from "@/lib/utils";

describe("cn (classname merge)", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible");
  });

  it("returns empty string for no input", () => {
    expect(cn()).toBe("");
  });
});

describe("formatPrice", () => {
  it("formats CNY price correctly", () => {
    const result = formatPrice(199.5);
    expect(result).toContain("199.50");
  });

  it("formats zero price", () => {
    const result = formatPrice(0);
    expect(result).toContain("0.00");
  });

  it("formats large price", () => {
    const result = formatPrice(12999);
    expect(result).toContain("12,999.00");
  });
});

describe("slugify", () => {
  it("converts text to slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("removes special characters", () => {
    expect(slugify("Hello! @World#")).toBe("hello-world");
  });

  it("handles multiple spaces", () => {
    expect(slugify("hello   world")).toBe("hello-world");
  });
});
