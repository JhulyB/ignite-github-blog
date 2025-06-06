import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GithubProvider } from "./contexts/githubContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GithubProvider>

        <BrowserRouter>
          <Router/>
        </BrowserRouter>
        
      </GithubProvider>

      <GlobalStyle/>
    </ThemeProvider>
  )
}
