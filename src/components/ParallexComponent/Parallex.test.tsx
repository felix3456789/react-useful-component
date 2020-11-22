import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Default } from './Parallex.stories'

it('Default Render', () => {
  render(<Default {...Default.args} />)
  expect(screen.getAllByAltText('test'))
})
