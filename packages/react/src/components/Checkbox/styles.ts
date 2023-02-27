import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  border: '2px solid $gray900',
  borderRadius: '$xs',
  backgroundColor: '$gray900',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&[data-state="checked"]': {
    backgroundColor: '$green300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $green300',
  },
})

const slideOut = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(0)' },
})

const slideIn = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(-100%)' },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: '$3',
  height: '$3',
  color: '$white',

  '&[data-state="checked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
})
