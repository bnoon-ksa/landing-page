import { describe, it, expect } from "vitest";
import robots from "./robots";

describe("robots()", () => {
  const config = robots();

  it("allows all user agents", () => {
    expect(config.rules).toBeDefined();
    const rules = Array.isArray(config.rules) ? config.rules[0] : config.rules;
    expect(rules.userAgent).toBe("*");
  });

  it("allows root path", () => {
    const rules = Array.isArray(config.rules) ? config.rules[0] : config.rules;
    expect(rules.allow).toBe("/");
  });

  it("disallows /api/ paths", () => {
    const rules = Array.isArray(config.rules) ? config.rules[0] : config.rules;
    const disallow = Array.isArray(rules.disallow)
      ? rules.disallow
      : [rules.disallow];
    expect(disallow).toContain("/api/");
  });

  it("references sitemap at bnoon.sa", () => {
    expect(config.sitemap).toBe("https://bnoon.sa/sitemap.xml");
  });
});
