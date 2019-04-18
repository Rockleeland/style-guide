import styled, { createGlobalStyle } from 'styled-components';
import { colors, sizes } from "./variables";

// // Global styles and resets
export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: ${sizes.base};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font: 100% / 1.618 Roboto, Arial, sans-serif;
    color: ${colors.text};
  }
`;

// Main container or wrapper
export const AppContainer = styled.div`
  padding: 0 8px 60px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  max-width: 992px;
`;

// H1 heading
export const StyleguideHeading = styled.h1`
  position: relative;
  display: inline-block;
  font-weight: 500;

  // Customizable underline
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background-color: ${colors.text};
  }
`;

// H2 heading
export const StyleguideSubheading = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 26px;
  font-weight: 400;
  text-align: left;

  // Customizable underline
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 1.5px;
    background-color: ${colors.text};
  }

  div + & {
    margin-top: 60px;
  }
`;