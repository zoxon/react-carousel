export const splitString = (str, delimiter = " ") =>
  str
    .trim()
    .split(delimiter)
    .filter(t => t !== "");

export const mapTheme = (baseClassName, theme, key = "theme") => {
  const themes = Array.isArray(theme) ? theme : splitString(theme);
  return themes.map(t => `${baseClassName}_${key}_${t}`);
};

export const addLeadingSlash = path => {
  return path.charAt(0) === "/" ? path : "/" + path;
};

export const removeBasename = (basename, pathname) => {
  if (!basename) return pathname;

  const base = addLeadingSlash(basename);
  if (pathname.indexOf(base) !== 0) return pathname;
  return pathname.substr(base.length);
};
