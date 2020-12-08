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
      background: "#dddddd",
      fontFamily: "IBM Plex Sans",
    }
  },
  themeConfig: {
    palette: {
      primary: {
        main: "#a01892",
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
  // const handleClick = () => {
  //   window[`scrollTo`]({ top: 0, behavior: `smooth` })
  // }
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
