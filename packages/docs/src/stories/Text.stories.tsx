import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@zica-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    as: 'strong',
  },
}