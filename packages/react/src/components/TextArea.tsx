import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  resize: 'vertical',
  minHeight: 80,
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  padding: '$3 $4',
  border: '1px solid $gray900',
  borderRadius: '$sm',
  color: '$white',
  backgroundColor: '$gray900',

  '&:focus': {
    outline: 'none',
    borderColor: '$green300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea> & {}
