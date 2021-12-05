import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/system'
import { createContext, Dispatch  } from 'react'

// Create a theme instance.
export const defaultTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  shape: {
    borderRadius: 8,
  }
});

export const ThemeContext = createContext<[Theme, Dispatch<Theme>]>({} as any)