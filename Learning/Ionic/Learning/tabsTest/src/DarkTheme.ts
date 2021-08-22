/**
 * .dark class enabler for css
 * yeet .dark into your dark Ionic classes
 */

export function cssEnableDarkThemeByMedia() {
  // Use matchMedia to check the user preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  cssSetDarkTheme(prefersDark.matches);
}


// Add or remove the "dark" class based on if the media query matches
export function cssSetDarkTheme(dark: boolean) {
  document.body.classList.toggle('dark', dark);
}


export function cssToggleDarkTheme() {
  document.body.classList.toggle('dark');
}