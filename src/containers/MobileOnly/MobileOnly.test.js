import React from 'react'
import renderer from 'react-test-renderer'
import Mobileonly from './index.js'

it('Mobileonly: default', () => {
  const component = renderer.create(<Mobileonly />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})