import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui-jeff-dev/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reprehenderit, perferendis dolorum praesentium neque nesciunt, necessitatibus eveniet amet voluptates delectus impedit accusamus perspiciatis minima laboriosam eaque, modi libero possimus explicabo.',
    size: 'md',
  },
  argTypes: {
    size: {
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
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustonTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
