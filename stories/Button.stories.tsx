import { Kind } from '@enums/Button'
import { Size } from '@enums/Size'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '@components/common'

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
  kind: Kind.PRIMARY,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  kind: Kind.SECONDARY,
  label: 'Button'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  kind: Kind.TERTIARY,
  label: 'Button'
}

export const Mustard = Template.bind({})
Mustard.args = { kind: Kind.MUSTARD, label: 'Button' }

export const XSmall = Template.bind({})
XSmall.args = {
  size: Size.X_SMALL,
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: Size.SMALL,
  label: 'Button'
}

export const Medium = Template.bind({})
Medium.args = {
  size: Size.MEDIUM,
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: Size.LARGE,
  label: 'Button'
}

export const XLarge = Template.bind({})
XLarge.args = {
  size: Size.X_LARGE,
  label: 'Button'
}
