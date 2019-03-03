import React from 'react'
import renderer from 'react-test-renderer'
import Cardwrapper from './index.js'

it('Cardwrapper: default', () => {
  const component = renderer.create(<Cardwrapper />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})