import React from 'react'
import styled, { css } from 'styled-components'

// Import colors and sizes variables
import { colors, sizes } from './../variables'

// Import Container component
import { Container } from './generic-helpers'

// Import H5 heading
import { H5 } from './typography'

const FormsRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  width: 100%;

  & + & {
    margin-top: 12px;
  }
`

// Input label
const InputLabel = styled.label`
  margin-bottom: 8px;
  display: block;
  width: 100%;
  font-size: ${sizes.sm};
  white-space: pre;
`

// Text input
const InputTextElement = styled.input`
  padding-bottom: 6px;
  display: block;
  background: transparent;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid ${colors.disabled};
  border-left: 0;
  outline: 0;
  transition: all .2s cubic-bezier(.4, 0, .2, 1) 0s;

  &:focus {
    outline: 0;
  }
`

// Textarea element
const TextareaElement = InputTextElement.withComponent('textarea') // candidate for deprecation

const InputTextareaElement = styled(TextareaElement)`
  min-height: 50px;
  resize: vertical;
`

// Checkbox input
const InputOriginalEl = styled.input`
  display: none;

  &:checked ~ div {
    background-color: ${colors.primary};
    border-color: ${colors.primary};

    &::after {
      transform: rotate(45deg) scale(1);
    }
  }
`

const InputOriginalElCustom = styled.div`
  position: absolute;
  top: 2px;
  left: 4px;
  height: 20px;
  width: 20px;
  background: transparent;
  border: 2px solid hsla(0, 100%, 0%, .25);
  border-radius: 2px;
  transition: all .25s ease-in-out;

  &::after {
    position: absolute;
    content: '';
    left: 4px;
    top: 0;
    width: 8px;
    height: 12px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: transform .25s ease-in-out;
  }
`

const InputLabelLabel = styled.span`
  margin-left: 22px;
`

// Radio input
const InputRadioElCustom = styled(InputOriginalElCustom)`
  &,
  &::after {
    border-radius: 50%;
  }

  &::after {
    left: 3px;
    top: 3px;
    width: 10px;
    height: 10px;
    background-color: #fff;
    transform: scale(1);
    transition: transform .25s ease-in-out;
  }
`

// General Input wrapper
const InputElWrapper = styled.fieldset`
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  border: 0;

  &:first-of-type {
    padding-right: 8px;
    padding-left: 0;
  }

  &:nth-of-type(n+2) {
    padding-left: 8px;
    padding-right: 8px;
  }

  &:last-of-type {
    padding-right: 0;
    padding-left: 8px;
  }

  label,
  input:not(type=checkbox):not(type=radio),
  textarea {
    width: 100%;
  }

  ${props =>
    props.active &&
    css`
    label {
      color: ${colors.primary};
    }

    input,
    textarea {
      border-bottom-color: ${colors.primary};
    }

    ${InputOriginalElCustom} {
      background-color: ${colors.primary};
      border-color: ${colors.primary};

      &::after {
        transform: rotate(45deg) scale(1);
      }
    }

    ${InputRadioElCustom} {
      background-color: ${colors.primary};

      &::after {
        background-color: #fff;
      }
    }
  `}

  ${props =>
    props.disabled &&
    css`
    &,
    label,
    input,
    textarea {
      cursor: not-allowed;
    }

    label {
      color: hsl(212.3, 16.7%, 75%);
    }

    input,
    textarea,
    ${InputOriginalElCustom} {
      border-bottom-color: hsl(212.3, 16.7%, 75%);
    }

    ${InputRadioElCustom} {
      border-color: hsl(212.3, 16.7%, 75%);
    }
  `}

  ${props =>
    props.error &&
    css`
    label {
      color: ${colors.error};
    }

    input,
    textarea {
      border-bottom-color: ${colors.error};
    }

    ${InputOriginalElCustom} {
      background: transparent;
      border: 2px solid ${colors.error};
    }
  `}

  ${props =>
    props.custom &&
    css`
    position: relative;
  `}
`

const Form = () => {
  return (
    <Container>
      <H5>Default</H5>

      <FormsRow>
        <InputElWrapper>
          <InputLabel htmlFor="exampleInputOne">Example input</InputLabel>

          <InputTextElement
            id="exampleInputOne"
            name="exampleInputOne"
            type="text"
          />
        </InputElWrapper>

        <InputElWrapper>
          <InputLabel htmlFor="exampleInputTwo">Example textarea</InputLabel>

          <InputTextareaElement id="exampleInputTwo" name="exampleInputTwo" />
        </InputElWrapper>

        <InputElWrapper custom>
          <InputLabel htmlFor="checkboxOne">
            <InputOriginalEl
              id="checkboxOne"
              name="checkboxOne"
              type="checkbox"
            />

            <InputOriginalElCustom />

            <InputLabelLabel>Example checkbox</InputLabelLabel>
          </InputLabel>
        </InputElWrapper>

        <InputElWrapper custom>
          <InputLabel htmlFor="radioOne">
            <InputOriginalEl id="radioOne" name="radioOne" type="radio" />

            <InputRadioElCustom />

            <InputLabelLabel>Example radio</InputLabelLabel>
          </InputLabel>
        </InputElWrapper>
      </FormsRow>

      <H5>Active</H5>

      <FormsRow>
        <InputElWrapper active>
          <InputLabel htmlFor="exampleInputThree">Example input</InputLabel>

          <InputTextElement
            id="exampleInputThree"
            name="exampleInputThree"
            type="text"
          />
        </InputElWrapper>

        <InputElWrapper active>
          <InputLabel htmlFor="exampleInputFour">Example textarea</InputLabel>

          <InputTextareaElement id="exampleInputFour" name="exampleInputFour" />
        </InputElWrapper>

        <InputElWrapper custom active>
          <InputLabel htmlFor="checkbox">
            <InputOriginalEl
              id="checkboxTwo"
              name="checkboxTwo"
              type="checkbox"
            />

            <InputOriginalElCustom />

            <InputLabelLabel>Example checkbox</InputLabelLabel>
          </InputLabel>
        </InputElWrapper>

        <InputElWrapper custom active>
          <InputLabel htmlFor="radioTwo">
            <InputOriginalEl id="radioTwo" name="radioTwo" type="radio" />

            <InputRadioElCustom />

            <InputLabelLabel>Example radio</InputLabelLabel>
          </InputLabel>
        </InputElWrapper>
      </FormsRow>

      <H5>Disabled</H5>

      <FormsRow>
        <InputElWrapper disabled>
          <InputLabel htmlFor="exampleInputFive">Example input</InputLabel>

          <InputTextElement
            id="exampleInputFive"
            name="exampleInputFive"
            type="text"
          />
        </InputElWrapper>

        <InputElWrapper disabled>
          <InputLabel htmlFor="exampleInputSix">Example textarea</InputLabel>

          <InputTextareaElement id="exampleInputSix" name="exampleInputSix" />
        </InputElWrapper>

        <InputElWrapper custom disabled>
          <InputLabel htmlFor="checkboxThree">
            <InputOriginalEl
              id="checkboxThree"
              name="checkboxThree"
              type="checkbox"
              disabled={true}
            />

            <InputOriginalElCustom />

            <InputLabelLabel>Example checkbox</InputLabelLabel>
          </InputLabel>
        </InputElWrapper>

        <InputElWrapper custom disabled>
          <InputLabel htmlFor="radioThree">
            <InputOriginalEl id="radioThree" name="radioThree" type="radio" />

            <InputRadioElCustom />

            <InputLabelLabel>Example radio</InputLabelLabel>
          </InputLabel>
        </InputElWrapper>
      </FormsRow>

      <H5>Error</H5>

      <FormsRow>
        <InputElWrapper error>
          <InputLabel htmlFor="exampleInputSeven">Example input</InputLabel>

          <InputTextElement
            id="exampleInputSeven"
            name="exampleInputSeven"
            type="text"
          />
        </InputElWrapper>

        <InputElWrapper error>
          <InputLabel htmlFor="exampleInputEight">Example textarea</InputLabel>

          <InputTextareaElement
            id="exampleInputEight"
            name="exampleInputEight"
          />
        </InputElWrapper>

        <InputElWrapper custom error>
          <InputLabel htmlFor="checkboxFour">
            <InputOriginalEl
              id="checkboxFour"
              name="checkboxFour"
              type="checkbox"
              disabled={true}
            />

            <InputOriginalElCustom />

            <InputLabelLabel>Example checkbox</InputLabelLabel>
          </InputLabel>
        </InputElWrapper>

        <InputElWrapper custom error>
          <InputLabel htmlFor="radioFour">
            <InputOriginalEl
              id="radioFour"
              name="radioFour"
              type="radio"
              disabled
            />

            <InputRadioElCustom />

            <InputLabelLabel>Example radio</InputLabelLabel>
          </InputLabel>
        </InputElWrapper>
      </FormsRow>
    </Container>
  )
}

export default Form