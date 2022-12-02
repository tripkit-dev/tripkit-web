import { Img } from '@shared/components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const SAMPLE_IMG_PATH = '/images/img_profile_example.png'

export default {
  title: 'Example/Image',
  component: Img
} as ComponentMeta<typeof Img>

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />

export const Basic = Template.bind({})
Basic.args = {
  src: SAMPLE_IMG_PATH,
  notSSR: true
}

export const New = Template.bind({})
New.args = {
  src: SAMPLE_IMG_PATH,
  notSSR: true,
  hasNewIcon: true
}
