import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  padding: '$3 $4',
  border: '1px solid $gray900',
  borderRadius: '$sm',
  backgroundColor: '$gray900',

  '&:has(input:focus)': {
    borderColor: '$green300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray400',
})

export const Input = styled('input', {
  width: '100%',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',
  backgroundColor: 'transparent',
  border: 'none',

  '&:focus': {
    outline: 'none',
  },

  '&::placeholder': {
    color: '$gray400',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})
