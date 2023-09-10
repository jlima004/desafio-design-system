import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Text,
  Toast,
  ToastProps,
  ToastProvider,
} from '@ignite-ui-jeff-dev/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'My toast title',
    description: 'My toast description',
    duration: 6000,
    open: true,
  },
  parameters: {
    docs: {
      description: {
        component: '<br> ### A customizable toast component',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Toast title',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    open: {
      description: 'If the toast is visible or not',
      defaultValue: {
        summary: 'false',
      },
      control: {
        type: 'boolean',
      },
    },
    description: {
      description: 'Toast description',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    duration: {
      description:
        'The time in milliseconds that should elapse before automatically closing each toast.',
      defaultValue: {
        summary: 5000,
      },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
  },
  render: (Story) => {
    return (
      <>
        <Box>
          <Text>See the toast in the lower right corner of the screen!</Text>
        </Box>

        <ToastProvider swipeDirection="right">
          <Toast {...Story} />
        </ToastProvider>
      </>
    )
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
