import React from 'react'
import renderer from 'react-test-renderer'
import Cardheading from './index.js'

it('Cardheading: default', () => {
  const component = renderer.create(<Cardheading />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})