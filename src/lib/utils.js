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
