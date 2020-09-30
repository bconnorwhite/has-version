import { expect, test } from "@jest/globals";
import hasVersion from "../source";

test(("has version"), async () => {
  return hasVersion("chalk", "0.1.0").then((result) => {
    expect(result).toBe(true);
  });
});

test(("doesn't have version"), async () => {
  return hasVersion("chalk", "999.999.999").then((result) => {
    expect(result).toBe(false);
  });
});

test(("package doesn't exist"), async () => {
  return hasVersion("a-package-that-doesnt-exist", "1.0.0").then((result) => {
    expect(result).toBe(undefined);
  });
});
