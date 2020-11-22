import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Parallex from '.'
import { ParallexComponentProps } from './ParallexComponent'
import Image from '../../assets/thumbnail.jpg'
import { withTests } from '@storybook/addon-jest'
import results from '../../.jest-test-results.json'

export default {
  title: 'Custom Componet/Parallex',
  component: Parallex,
  decorators: [withTests({ results })],
} as Meta

const Template: Story<ParallexComponentProps> = (args) => (
  <>
    <div
      style={{
        height: '200vh',
        width: '100%',
        textAlign: 'center',
        padding: '300px',
      }}>
      <span>Test</span>

      <Parallex {...args}>
        <img
          style={{
            height: '200px',
            margin: '0 auto',
          }}
          src={Image}
          alt='test'
        />
      </Parallex>
    </div>
  </>
)

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  jest: ['Parallex.test.tsx'],
}

export const Vertical = Template.bind({})
Vertical.args = {
  axis: 'vertical',
  ratio: 0.5,
}

export const VerticalReverse = Template.bind({})
VerticalReverse.args = {
  axis: 'vertical',
  ratio: 0.5,
  reverse: true,
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  axis: 'horizontal',
  ratio: 0.5,
}

export const HorizontalReverse = Template.bind({})
HorizontalReverse.args = {
  axis: 'horizontal',
  ratio: 0.5,
  reverse: true,
}
