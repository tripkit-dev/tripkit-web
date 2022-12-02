import { Button } from '@shared/components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  kind: 'primary',
  children: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  kind: 'secondary',
  children: 'Button'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  kind: 'tertiary',
  children: 'Button'
}

export const Mustard = Template.bind({})
Mustard.args = { kind: 'mustard', children: 'Button' }

export const XSmall = Template.bind({})
XSmall.args = {
  size: 'xsmall',
  children: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Button'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  children: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Button'
}

export const XLarge = Template.bind({})
XLarge.args = {
  size: 'xlarge',
  children: 'Button'
}
