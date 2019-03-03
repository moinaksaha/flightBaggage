import React from 'react'
import renderer from 'react-test-renderer'
import Cardimage from './index.js'

it('Cardimage: default', () => {
  const component = renderer.create(<Cardimage />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})