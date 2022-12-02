import { Button } from '@shared/components'
import { Kind } from '@shared/enums/Button'
import { Size } from '@shared/enums/Size'
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
  kind: Kind.PRIMARY,
  children: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  kind: Kind.SECONDARY,
  children: 'Button'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  kind: Kind.TERTIARY,
  children: 'Button'
}

export const Mustard = Template.bind({})
Mustard.args = { kind: Kind.MUSTARD, children: 'Button' }

export const XSmall = Template.bind({})
XSmall.args = {
  size: Size.X_SMALL,
  children: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: Size.SMALL,
  children: 'Button'
}

export const Medium = Template.bind({})
Medium.args = {
  size: Size.MEDIUM,
  children: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: Size.LARGE,
  children: 'Button'
}

export const XLarge = Template.bind({})
XLarge.args = {
  size: Size.X_LARGE,
  children: 'Button'
}
