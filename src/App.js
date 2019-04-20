import React, { Fragment } from "react";
import { colors, sizes } from "./variables";
import GithubIcon from "./images/GitHub_Logo.png";
import Step from "./components/steps/";
import Intro from "./components/intro/";

//import global theme
import {
  GlobalStyle,
  AppContainer,
  StyleguideHeading,
  StyleguideSubheading,
  CodeSnippet,
  StyledIcon
} from "./style";

// Import style guide components
import Buttons from "./components/buttons/";
import Colors from "./components/colors";
import Forms from "./components/forms";
import Typography from "./components/typography";

const App = () => {
  return (
    <Fragment>
      <AppContainer>
        <StyleguideHeading>
          Material UI/Styled Components Style Guide
        </StyleguideHeading>
        by: Leeland Clenista
        <a
          href="https://github.com/Rockleeland/style-guide"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon alt="github logo" src={GithubIcon} />
        </a>
        <Intro />
        <Step />
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
};

export default App;
