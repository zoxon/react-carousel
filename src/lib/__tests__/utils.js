import {
  splitString,
  mapTheme,
  addLeadingSlash,
  removeBasename
} from "../utils";

it("splitString", () => {
  expect(splitString("default    rounded \t")).toEqual(["default", "rounded"]);
  expect(splitString("default   , rounded \t", ",")).toEqual([
    "default",
    "rounded"
  ]);
});

it("mapTheme", () => {
  const base = "button";
  expect(mapTheme(base, "default rounded")).toEqual([
    "button_theme_default",
    "button_theme_rounded"
  ]);
  expect(mapTheme(base, ["default", "rounded"])).toEqual([
    "button_theme_default",
    "button_theme_rounded"
  ]);

  expect(mapTheme(base, ["default", "rounded"], "style")).toEqual([
    "button_style_default",
    "button_style_rounded"
  ]);
});
