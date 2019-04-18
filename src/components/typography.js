// Import dependencies
import React from 'react'
import styled, { css } from 'styled-components'

// Import colors and sizes variables
import { colors, sizes } from './../variables'

// Import Container component
import { Container } from './generic-helpers'

// Extending Container component
const ColorsContainer = styled(Container)`
  h5 {
    margin-top: 0;
  }
`

// Styles for all headings
const HeadingStyle = css`
  margin-top: 0;
  margin-bottom: 16px;
`

// Heading h1
export const H1 = styled.h1`
  ${HeadingStyle};
  font-size: ${props => props.size};
`

// Heading h2
export const H2 = styled.h2`
  ${HeadingStyle};
  font-size: ${props => props.size};
`

// Heading h3
export const H3 = styled.h3`
  ${HeadingStyle};
  font-size: ${props => props.size};
`

// Heading h4
export const H4 = styled.h4`
  ${HeadingStyle};
  font-size: ${props => props.size};
`

// Heading h5
export const H5 = styled.h5`
  ${HeadingStyle};
  font-size: ${props => props.size};
`

// Heading h6
export const H6 = styled.h6`
  ${HeadingStyle};
  font-size: ${props => props.size};
`

// Body text
export const Text = styled.p`
  ${HeadingStyle};
  font-size: ${props => props.size};
`

// Small text (<small>)
export const Small = styled.small`
  font-size: ${props => props.size};
`

// Bold text
export const Strong = styled.strong`
  font-weight: bold;
`

// Highlighted text
export const Highlight = styled.mark`
    background-color: hsl(209.6,100%,85%);
`

// Italicized text
export const Italic = styled.em`
  font-style: italic;
`

// Underlined text
export const Underline = styled.u`
  text-decoration: underline;
`

// Links
export const Link = styled.a`
  margin-top: 12px;
  display: inline-block;
  font-size: ${props => props.size};
  text-decoration: underline;
  color: ${props => colors.primary};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  ${props =>
    props.active &&
    css`
      color: ${props => colors.primaryActive};
  `}

  ${props =>
    props.hover &&
    css`
      color: ${props => colors.primaryHover};
  `}

  ${props =>
    props.visited &&
    css`
      color:hsl(209.6,100%,15.9%);
      text-decoration: underline;
  `}

  ${props =>
    props.disabled &&
    css`
      color: ${props => colors.disabled};
  `}
`

const Typography = () => {
  return (
    <ColorsContainer>
      <H1 size={sizes.xxxxl}>Heading 1</H1>

      <H2 size={sizes.xxxl}>Heading 2</H2>

      <H3 size={sizes.xxl}>Heading 3</H3>

      <H4 size={sizes.xl}>Heading 4</H4>

      <H5 size={sizes.lg}>Heading 5</H5>

      <H6 size={sizes.base}>Heading 6</H6>

      <Text size={sizes.base}>
        This is a body text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
      </Text>

      <Text>
        <Small size={sizes.sm}>Small text</Small>
      </Text>

      <Text>
        <Strong>Bold text</Strong>
      </Text>

      <Text>
        <Highlight>Highlighted text</Highlight>
      </Text>

      <Text>
        <Italic>Italicized text</Italic>
      </Text>

      <Text>
        <Underline>Underlined text</Underline>
      </Text>

      <Link size={sizes.base}>Link default</Link>

      <Link hover size={sizes.base}>
        Link hover
      </Link>

      <Link active size={sizes.base}>
        Link active
      </Link>

      <Link visited size={sizes.base}>
        Link visited
      </Link>

      <Link disabled size={sizes.base}>
        Link disabled
      </Link>
    </ColorsContainer>
  )
}

export default Typography