import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@zica-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          <Story />
        </Box>
      )
    }
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}