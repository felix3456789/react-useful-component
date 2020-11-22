import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Component from './FadeIn'
import { FadeInProps } from './FadeIn'
import { withTests } from '@storybook/addon-jest'
import results from '../../.jest-test-results.json'
export default {
  title: 'Custom Componet/Fade In',
  component: Component,
  decorators: [withTests({ results })],
} as Meta

const Template: Story<FadeInProps> = (args) => <Component {...args} />
export const Primary = Template.bind({})
Primary.args = {}
