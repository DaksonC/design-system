import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@zica-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    as: 'strong',
  },
}