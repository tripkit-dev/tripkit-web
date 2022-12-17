import { UncontrolledInput } from '@shared/components'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Example/Input',
  component: UncontrolledInput
} as ComponentMeta<typeof UncontrolledInput>

const Template: ComponentStory<typeof UncontrolledInput> = (args) => (
  <UncontrolledInput {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  kind: 'primary',
  shape: 'normal',
  placeholder: 'normal input'
}

export const Round = Template.bind({})
Round.args = {
  kind: 'primary',
  shape: 'round',
  placeholder: 'round input'
}

export const Primary = Template.bind({})
Primary.args = {
  kind: 'primary',
  shape: 'normal',
  placeholder: 'primary input'
}

export const Secondary = Template.bind({})
Secondary.args = {
  kind: 'secondary',
  shape: 'normal',
  placeholder: 'secondary input'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  kind: 'tertiary',
  shape: 'normal',
  placeholder: 'tertiary input'
}
