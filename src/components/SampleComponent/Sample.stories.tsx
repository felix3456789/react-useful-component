import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import SampleComponent from '.'
import { SampleProps } from './SampleComponent'
import { withTests } from '@storybook/addon-jest'
import results from '../../.jest-test-results.json'
export default {
  title: 'Custom Componet/Sample',
  component: SampleComponent,
  decorators: [withTests({ results })],
  args: {
    text: 'Test btn',
  },
} as Meta

function test(): string {
  console.log('hi')
  return 'hi'
}
const Template: Story<SampleProps> = (args) => <SampleComponent {...args} />
export const Primary = Template.bind({})
Primary.args = {
  onClick: test,
}
