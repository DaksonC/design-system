import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@zica-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: [
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
      ],
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Custom Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o componente Heading é renderizado como um `h2`, mas você pode customizar o tag HTML que será renderizado passando o parâmetro `as`.',
      },
    },
  },
}