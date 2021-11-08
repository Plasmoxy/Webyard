module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // flat gray:
        gray: {
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('daisyui'),
  ],
  /*
  daisyui: {
    themes: [
      {
        'coretheme': {
          "primary": "#793ef9",
          "primary-focus": "#570df8",
          "primary-content": "#ffffff",
          "secondary": "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          "accent": "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          "neutral": "#2a2e37",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",
          "base-100": "#131316",
          "base-200": "#2a2e37",
          "base-300": "#16181d",
          "base-content": "#ebecf0",
          "info": "#66c6ff",
          "success": "#87d039",
          "warning": "#e2d562",
          "error": "#ff6f6f",
          "--border-color": "var(--b3)",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": ".2s",
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "0.95",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
    ]
  },
  */
}
