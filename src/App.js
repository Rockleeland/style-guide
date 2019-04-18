import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { colors, sizes } from "./variables";

// Import style guide components
import Buttons from "./components/buttons";
import Colors from "./components/colors";
import Forms from "./components/forms";
import Typography from "./components/typography";

// // Global styles and resets
const GlobalStyle = createGlobalStyle`
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
const AppContainer = styled.div`
  padding: 0 8px 60px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  max-width: 992px;
`;

// H1 heading
const StyleguideHeading = styled.h1`
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
const StyleguideSubheading = styled.h2`
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

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppContainer>
          <StyleguideHeading>Style guide</StyleguideHeading>

          <p>This is a style guide that uses Material UI to make resuable view components</p>

          <StyleguideSubheading>Colors</StyleguideSubheading>

          <Colors colors={colors} />

          <StyleguideSubheading>Typography</StyleguideSubheading>

          <Typography colors={colors} scale={sizes} />

          <StyleguideSubheading>Buttons</StyleguideSubheading>

          <Buttons colors={colors} />

          <StyleguideSubheading>Forms</StyleguideSubheading>

          <Forms colors={colors} scale={sizes} />
        </AppContainer>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
