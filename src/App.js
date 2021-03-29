import React, { Fragment, useState } from 'react';
import './App.css'
import { ThemeProvider, createMuiTheme, CssBaseline, responsiveFontSizes } from '@material-ui/core';
import Landing from './components/Landing';


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  let lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#ff9800'
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h1: {
        fontSize: "2.1rem",
        lineHeight: 1.3,
        fontWeight: 400,
        letterSpacing: '3px'
      },
      h2: {
        fontSize: '1.4rem'
      },
      h3: {
        fontSize: "1.1rem",
        letterSpacing: '1px',
        lineHeight: 1.5
      }
    }
  });

  let darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#ff9800'
      },
      background: {
        default: "#000"
      }
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h1: {
        fontSize: "2.1rem",
        lineHeight: 1.3,
        fontWeight: 400,
        letterSpacing: '3px'
      },
      h2: {
        fontSize: '1.4rem'
      },
      h3: {
        fontSize: "1.1rem",
        letterSpacing: '1px',
        lineHeight: 1.5
      },
    }
  })

  lightTheme = responsiveFontSizes(lightTheme);
  darkTheme = responsiveFontSizes(darkTheme);

  return (
    <Fragment>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
        <CssBaseline />
        <Landing setDarkMode={setDarkMode} darkMode={darkMode} />
      </ThemeProvider>
    </Fragment>
  )
}
