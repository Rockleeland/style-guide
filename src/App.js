import React, { Fragment } from "react";
import { colors, sizes } from "./variables";

//import global theme
import { 
  GlobalStyle, 
  AppContainer, 
  StyleguideHeading, 
  StyleguideSubheading  
} from './style';

// Import style guide components
import Buttons from "./components/buttons/";
import Colors from "./components/colors";
import Forms from "./components/forms";
import Typography from "./components/typography";



const App = () => {
  return (
    <Fragment>
      <AppContainer>
        <StyleguideHeading>Style guide</StyleguideHeading>

        <p>
          This is a style guide that uses Material UI to make resuable view
          components.
        </p>
        <p>How to use Styled Components with Material UI Components</p>
        <ol>
          <li>Use the styled() method to style your Material UI components</li>
          <li>Prioritize the CSS rules of your styled-components over those of the JSS with &&</li>
          <li>Dynamically style your components while avoiding warnings related to DOM attributes</li>
        </ol>

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
