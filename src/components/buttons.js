// Import dependencies
import React from 'react'
import styled, { css } from 'styled-components'

// Import colors and sizes variables
import { colors, sizes } from './../variables'

// Import Container component
import { Container } from './generic-helpers'

// Import H5 heading
import { H5 } from './typography'

const ButtonsRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  width: 100%;

  & + & {
    margin-top: 12px;
  }
`

const ButtonVariant = styled.div`
  width: 16.6666667%;

  &:nth-of-type(n+2) {
    text-align: center;
  }
`

const Button = styled.button`
  display: inline-block;
  width: ${props => (props.fab ? '32px' : 'initial')};
  font-size: ${sizes.sm};
  color: ${props => (props.ghost ? props.theme : '#fff')};
  background-color: ${props => (props.ghost ? 'transparent' : props.theme)};
  border: ${props => (props.ghost ? `1px solid ${props.theme}` : 0)};
  border-radius: ${props => (props.fab ? '50%' : '2px')};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.18), 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  & + & {
    margin-top: 12px;
  }

  ${props =>
    props.active & !props.ghost &&
    css`
      background-color: ${colors.primaryActive};
  `};

  ${props =>
    props.active & props.ghost &&
    css`
      color: ${colors.primaryActive};
      border-color: ${colors.primaryActive};
  `};

  ${props =>
    props.hover & props.ghost &&
    css`
      color: ${colors.primaryHover};
      border-color: ${colors.primaryHover};
  `};

  ${props =>
    props.large | props.ghost &&
    css`
      padding: 14px 18px;
  `};

  ${props =>
    props.disabled & !props.ghost &&
    css`
      background-color: ${colors.disabled};
  `};

  ${props =>
    props.disabled & props.ghost &&
    css`
      color: ${colors.disabled};
      border-color: ${colors.disabled};
  `};

  ${props =>
    props.fab &&
    css`
      padding: 8px 16px;
      width: 40px;
      line-height: 24px;
  `};

  ${props =>
    props.medium &&
    css`
      padding: 10px 16px;
  `};

  ${props =>
    props.small &&
    css`
      padding: 6px 12px;
  `};

    ${props =>
      props.icon &&
      css`
      i {
        margin-right: 2px;
        font-size: 12px;
      }
  `};
`

const Buttons = () => {
  return (
    <Container>
      <H5>Default</H5>
      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.primary} large>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} large icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} ghost>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} medium>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} small>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} fab>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>

      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.secondary} large>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondary} large icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondary} ghost>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondary} medium>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondary} small>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondary} fab>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>

      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.error} large>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.error} large icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.error} ghost>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.error} medium>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.error} small>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.error} fab>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>

      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.success} large>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.success} large icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.success} ghost>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.success} medium>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.success} small>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.success} fab>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>

      <H5>Hover</H5>
      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.primaryHover} large hover>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primaryHover} large hover icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primaryHover} ghost hover>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primaryHover} medium hover>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primaryHover} small hover>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primaryHover} fab hover>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>

      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.secondaryHover} large>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondaryHover} large icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondaryHover} ghost>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondaryHover} medium>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondaryHover} small>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondaryHover} fab>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>

      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.errorHover} large>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.errorHover} large icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.errorHover} ghost>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.errorHover} medium>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.errorHover} small>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.errorHover} fab>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>

      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.successHover} large>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.successHover} large icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.successHover} ghost>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.successHover} medium>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.successHover} small>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.successHover} fab>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>

      <H5>Active</H5>
      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.primary} large active>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} large active icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} ghost active>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} medium active>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} small active>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} fab active>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>

      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.secondaryActive} large>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondaryActive} large icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondaryActive} ghost>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondaryActive} medium>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondaryActive} small>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.secondaryActive} fab>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>

      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.errorActive} large>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.errorActive} large icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.errorActive} ghost>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.errorActive} medium>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.errorActive} small>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.errorActive} fab>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>

      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.successActive} large>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.successActive} large icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.successActive} ghost>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.successActive} medium>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.successActive} small>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.successActive} fab>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>

      <H5>Disabled</H5>
      <ButtonsRow>
        <ButtonVariant>
          <Button theme={colors.primary} large disabled>
            Large
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} large disabled icon>
            <i class="fas fa-bullhorn" /> with icon
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} ghost disabled>
            Ghost
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} medium disabled>
            Medium
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} small disabled>
            Small
          </Button>
        </ButtonVariant>

        <ButtonVariant>
          <Button theme={colors.primary} fab disabled>
            +
          </Button>
        </ButtonVariant>
      </ButtonsRow>
    </Container>
  )
}

export default Buttons;
