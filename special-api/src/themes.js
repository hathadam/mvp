import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: "https://wallpapercave.com/wp/wp10538368.jpg",
  fontColor: "#000",
};

export const darkTheme = {
  body: "https://wallpapercave.com/wp/wp2839813.jpg",
  fontColor: "#fff"
};

export const GlobalStyles = createGlobalStyle`

  body {
    background-image: url(${(props) => props.theme.body});
  }
`;
