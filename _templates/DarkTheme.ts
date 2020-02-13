/**
 * .dark class enabler for css
 * yeet .dark into your dark Ionic classes
 * by Plasmoxy
 */

export function cssMediaPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)')
}

// Add or remove the "dark" class based on if the media query matches
export function cssSetDarkTheme(dark: boolean) {
  document.body.classList.toggle('dark', dark);
}


export function cssToggleDarkTheme() {
  document.body.classList.toggle('dark');
}