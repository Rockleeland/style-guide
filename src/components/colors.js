// ./components/colors.jsx

// Import dependencies
import React from 'react'
import styled from 'styled-components'

// Import colors and sizes variables
import { colors, sizes } from './../variables'

// Import Container component
import { Container } from './generic-helpers'

// Extending Container component
const ColorsContainer = styled(Container)`
  flex-flow: row wrap;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`

// Container for one color sample
const ColorBlock = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: calc(33.3333% - 18px);
  font-size: ${sizes.base};
  background-color: ${props => props.theme};

  & + div {
    margin-left: 18px;
  }

  @media (max-width: 767px) {
    & + div:nth-of-type(n + 4) {
      margin-top: 32px;
    }

    & + div:nth-of-type(4) {
      margin-left: 0;
      margin-right: 18px;
    }

    & + div:nth-of-type(5) {
      margin-left: 18px;
    }
  }

  @media (min-width: 768px) {
    width: calc(25% - 18px);

    & + div:nth-of-type(n + 4) {
      margin-left: 18px;
    }
  }

  @media (max-width: 991px) {
    & + div:nth-of-type(n + 5) {
      margin-top: 32px;
    }

    & + div:nth-of-type(5) {
      margin-left: 0;
    }
  }

  @media (min-width: 992px) {
    width: calc(20% - 18px);

    & + div:nth-of-type(5) {
      margin-left: 18px;
    }

    & + div:nth-of-type(6) {
      margin-top: 32px;
      margin-left: 0;
    }
  }

  @media (min-width: 1200px) {
    width: calc(16.66667% - 18px);

    & + div:nth-of-type(6) {
      margin-left: 18px;
    }

    & + div:nth-of-type(6) {
      margin-top: 0;
      margin-left: 18px;
    }
  }
`

// Color thumbnail
const ColorBlockColor = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 86px;
  background-color: ${props => props.theme};
`

// Color label
const ColorBlockTitle = styled.span`
  margin-bottom: 6px;
  font-size: ${sizes.sm};
  font-weight: 700;
  color: hsl(0, 0%, 55%);
`

// Color codes
const ColorBlockCode = styled.span`
  font-size: ${sizes.xs};
  color: hsl(0, 0%, 7%);

  & + & {
    margin-top: 2px;
  }
`

const Colors = () => {
  return (
    <ColorsContainer>
      {/* Color sample 1 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.primary} />

        <ColorBlockTitle>Blue</ColorBlockTitle>

        <ColorBlockCode>
          <strong>Hex:</strong> #1e90ff
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>RGB:</strong> 30, 144, 255
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>HSL:</strong> 209.6, 100%, 55.9%
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>CMYK:</strong> 88, 44, 0, 0
        </ColorBlockCode>
      </ColorBlock>

      {/* Color sample 2 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.secondary} />

        <ColorBlockTitle>Orange</ColorBlockTitle>

        <ColorBlockCode>
          <strong>Hex:</strong> #ff9f43
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>RGB:</strong> 255, 159, 67
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>HSL:</strong> 29.4, 100%, 63.1%
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>CMYK:</strong> 0, 38, 74, 0
        </ColorBlockCode>
      </ColorBlock>

      {/* Color sample 3 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.disabled} />

        <ColorBlockTitle>Gray</ColorBlockTitle>

        <ColorBlockCode>
          <strong>Hex:</strong> #a4b0be
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>RGB:</strong> 164, 176, 190
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>HSL:</strong> 212.3, 16.7%, 69.4%
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>CMYK:</strong> 14, 7, 0, 25
        </ColorBlockCode>
      </ColorBlock>

      {/* Color sample 4 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.error} />

        <ColorBlockTitle>Red</ColorBlockTitle>

        <ColorBlockCode>
          <strong>Hex:</strong> #ee5253
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>RGB:</strong> 238, 82, 83
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>HSL:</strong> 359.6, 82.1%, 62.7%
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>CMYK:</strong> 0, 66, 65, 7
        </ColorBlockCode>
      </ColorBlock>

      {/* Color sample 5 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.success} />

        <ColorBlockTitle>Green</ColorBlockTitle>

        <ColorBlockCode>
          <strong>Hex:</strong> #1dd1a1
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>RGB:</strong> 29, 209, 161
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>HSL:</strong> 164, 75.6%, 46.7%
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>CMYK:</strong> 86, 0, 23, 18
        </ColorBlockCode>
      </ColorBlock>

      {/* Color sample 6 */}
      <ColorBlock>
        <ColorBlockColor theme={colors.text} />

        <ColorBlockTitle>Dark blue</ColorBlockTitle>

        <ColorBlockCode>
          <strong>Hex:</strong> #030a1d
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>RGB:</strong> 3, 10, 29
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>HSL:</strong> 223.8, 81.3%, 6.3%
        </ColorBlockCode>

        <ColorBlockCode>
          <strong>CMYK:</strong> 90, 66, 0, 89
        </ColorBlockCode>
      </ColorBlock>
    </ColorsContainer>
  )
}

export default Colors