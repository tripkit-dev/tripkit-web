import { Kind, Shape } from '@enums/Input'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from '@components/common'

export default {
  title: 'Example/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Normal = Template.bind({})
Normal.args = {
  kind: Kind.PRIMARY,
  shape: Shape.NORMAL,
  placeholder: 'normal input'
}

export const Round = Template.bind({})
Round.args = {
  kind: Kind.PRIMARY,
  shape: Shape.ROUND,
  placeholder: 'round input'
}

export const Primary = Template.bind({})
Primary.args = {
  kind: Kind.PRIMARY,
  shape: Shape.NORMAL,
  placeholder: 'primary input'
}

export const Secondary = Template.bind({})
Secondary.args = {
  kind: Kind.SECONDARY,
  shape: Shape.NORMAL,
  placeholder: 'secondary input'
}
