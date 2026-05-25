import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6b8cff',
      light: '#8ba4ff',
      dark: '#4a6fe0',
    },
    secondary: {
      main: '#2a2a3e',
      light: '#353550',
    },
    background: {
      default: '#0f0f14',
      paper: '#18181f',
    },
    text: {
      primary: '#fafafa',
      secondary: '#9ca3af',
    },
    divider: 'rgba(255,255,255,0.08)',
    error: {
      main: '#f87171',
    },
    warning: {
      main: '#fbbf24',
    },
    success: {
      main: '#4ade80',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: '#3a3a3a #18181f',
          '&::-webkit-scrollbar': {
            width: 8,
            height: 8,
          },
          '&::-webkit-scrollbar-track': {
            background: '#18181f',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#3a3a3a',
            borderRadius: 4,
            '&:hover': {
              background: '#4a4a4a',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
          padding: '10px 22px',
        },
        containedPrimary: {
          boxShadow: '0 4px 14px 0 rgba(107,140,255,0.25)',
          '&:hover': {
            boxShadow: '0 6px 20px 0 rgba(107,140,255,0.35)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          maxWidth: '1280px',
        },
      },
    },
  },
})

export default theme
