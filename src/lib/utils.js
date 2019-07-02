import normalizePath from "normalize-path";

export const splitString = (str, delimiter = " ") =>
  str
    .trim()
    .split(delimiter)
    .map(i => i.trim())
    .filter(t => t !== "");

export const mapTheme = (baseClassName, theme, key = "theme") => {
  const themes = Array.isArray(theme) ? theme : splitString(theme);
  return themes.map(t => `${baseClassName}_${key}_${t}`);
};

export const addLeadingSlash = (path = "") => {
  return path.charAt(0) === "/" ? path : "/" + path;
};

export const removeTrailingSlash = path => path.replace(/\/$/, "");

export const removeBasename = (_basename, _pathname) => {
  const basename = normalizePath(_basename, false);
  const pathname = normalizePath(_pathname, false);

  let result = "/";

  if (!basename) {
    result = pathname;
  }

  const base = addLeadingSlash(basename);
  if (pathname.indexOf(base) !== 0) {
    result = pathname;
  }

  result = pathname.substr(base.length);

  return addLeadingSlash(result);
};
