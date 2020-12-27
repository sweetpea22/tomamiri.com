import React from 'react';
import { ThemeProvider, createTheme } from "@chainsafe/common-theme";
import {
  CssBaseline, Router
} from "@chainsafe/common-components"
import Routes from "./Components/Routes";


const theme = createTheme({
  globalStyling: {
    body: {
      overflowX: "hidden",
      background: "#121212",
      fontFamily: 'Inter',
    }
  },
  themeConfig: {
    palette: {
      primary: {
        main: "#a01892",
        light: "#e8z2dc",
      },
      secondary: {
        main: "#eeeeee"
      },
      common: {
        black: {
          main: "#333333"
        },
        white: {
          main: "#ffffff"
        }
      }
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
