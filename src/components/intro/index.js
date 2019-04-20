import React, { Fragment } from "react";
import { StyledIcon } from "../../style";
import { StyledContainer } from "./style";
import MaterialIcon from "../../images/material-icon.png";
import StyledComponentsIcon from "../../images/styled-components.png";

const Intro = () => {
  return (
    <StyledContainer>
      <p>
        This is a style guide that integrates Material UI and Styled Components
        to make resuable view components.
      </p>
      <a href="https://material-ui.com/">
        <StyledIcon alt="github logo" src={MaterialIcon} />
      </a>
      <p>
        Material UI is a React Component library that implements Google's
        Material Design. It is the most popular component library with over 46k
        stars on Github.
      </p>
      <a href="https://www.styled-components.com/">
        <StyledIcon alt="github logo" src={StyledComponentsIcon} />
      </a>
      <p>
        Styled-Components is a library that is used to style React components.
        It is used to by creating React components without the need of making
        CSS class names.
      </p>
      <div />
    </StyledContainer>
  );
};

export default Intro;
