import { GlobalStyle } from "./styles/global";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { dark } from "./styles/themes/dark";
import { light } from "./styles/themes/light";
import { Header } from "./components/Header";
import { useSaveTheme } from "./utils/useSaveTheme";

function App() {
  const [theme, setTheme] = useSaveTheme<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
}

export default App;
