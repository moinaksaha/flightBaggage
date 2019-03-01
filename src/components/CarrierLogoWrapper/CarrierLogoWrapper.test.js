import React from 'react'
import renderer from 'react-test-renderer'
import Carrierlogowrapper from './index.js'

it('Carrierlogowrapper: default', () => {
  const component = renderer.create(<Carrierlogowrapper />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})