import Highlight from "react-highlight";
import React, { Fragment } from "react";

const Steps = () => {
  return (
    <Fragment>
      <h2>How to use Styled Components with Material UI Components</h2>
      <ol>
        <li>
          Use the styled() method from Styled-Components to style your Material
          UI components
        </li>
        <Highlight language="javascript">
          <p>{`import styled, { css } from 'styled-components'`}</p>
          <p>{`import Button from '@material-ui/core/Button';`}</p>
          <p>{`export default styled(Button)\`\`;`}</p>
        </Highlight>
        <li>
          Prioritize the CSS rules of your styled-components over those of the
          JSS with &&
        </li>
        <Highlight language="javascript">
          <p>{`import styled, { css } from 'styled-components'`}</p>
          <p>{`import Button from '@material-ui/core/Button';`}</p>
          <p>{`export default styled(Button)\``}</p>
          <p>{`//ampersand character makes sure that styled-component styles override JSS styles`}</p>
          <p>{`  && {`}</p>
          <p>{`    color: #FF000`}</p>
          <p>{`    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.18), 0 4px 8px 0 rgba(0, 0, 0, 0.15);`}</p>
          <p>{`  }`}</p>
          <p>{`\`;`}</p>
        </Highlight>
        <li>
          Dynamically style your components while avoiding warnings related to
          DOM attributes
        </li>
        <Highlight language="javascript">
          <p>{`import React from 'react'`}</p>
          <p>{`import styled, { css } from 'styled-components'`}</p>
          <p>{`import Button from '@material-ui/core/Button';`}</p>
          <p>{`export default styled(({ color, ...otherProps }) => <Button {...otherProps} />)\``}</p>
          <p>{"  color: ${props => props.color};"}</p>
          <p>{`\`;`}</p>
        </Highlight>
        <li>Style children of Material UI components </li>
        <Highlight language="javascript">
          <p>{`import React from 'react'`}</p>
          <p>{`import styled, { css } from 'styled-components'`}</p>
          <p>{`import Button from '@material-ui/core/Button';`}</p>
          <p>{`export default styled(({ color, ...otherProps }) => <Button {...otherProps} />)\``}</p>
          <p>{"  color: ${props => props.color};"}</p>
          <p>{`  & .label {`}</p>
          <p>{`    font-size: 14px;`}</p>
          <p>{`  }`}</p>
          <p>{`\`;`}</p>
        </Highlight>
      </ol>
    </Fragment>
  );
};

export default Steps;
