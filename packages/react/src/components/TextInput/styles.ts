import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
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

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    size: 'md',
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
