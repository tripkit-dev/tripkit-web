import { Card } from '@shared/components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const SAMPLE_IMG_PATH = '/images/sample/kyungju_01.png'

export default {
  title: 'Example/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Small = Template.bind({})
Small.args = {
  imgSrc: SAMPLE_IMG_PATH,
  size: 'small'
}

export const Medium = Template.bind({})
Medium.args = {
  imgSrc: SAMPLE_IMG_PATH
}

export const Large = Template.bind({})
Large.args = {
  imgSrc: SAMPLE_IMG_PATH,
  size: 'large'
}
