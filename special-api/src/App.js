import React, { useState } from "react";
import SpotifyApp from "./components/spotify/SpotifyApp";
import Search from "./components/wikiSearch/Search";
import Translate from "./components/translate/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import ImageApp from "./components/imageSearch/ImageApp";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import Switch from "./components/Switch";

const StyledApp = styled.div`
  color: ${props => props.theme.fontColor};
`
const App = () => {

  const [theme, setTheme] = useState("light");
  const [isToggled, setIsToggled] = useState(false);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
          <Header />
          <Route path="/">
            <Switch
              rounded={true}
              isToggled={isToggled}
              onToggle={() => {
                themeToggler();
                setIsToggled(!isToggled)
              }} />
            <SpotifyApp/>
          </Route>
          <Route path="/wikiSearch">
            <Search />
          </Route>
          <Route path="/imageSearch">
            <ImageApp />
          </Route>
          <Route path="/translate">
            <Translate />
          </Route>
        </StyledApp>
    </ThemeProvider>
  );
};
export default App;
