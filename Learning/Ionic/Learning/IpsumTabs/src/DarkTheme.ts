/**
 * .dark class enabler for css
 * yeet .dark into your dark Ionic classes
 * by Plasmoxy
 */

export function cssMediaPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

// Add or remove the "dark" class based on if the media query matches
export function cssSetDarkTheme(dark: boolean) {
  document.body.classList.toggle('dark', dark);
}

export function cssIsDarkThemeEnabled() {
  return document.body.classList.contains('dark')
}

export function cssToggleDarkTheme() {
  document.body.classList.toggle('dark');
}