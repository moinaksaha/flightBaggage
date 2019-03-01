import React from 'react'
import renderer from 'react-test-renderer'
import Flightrunninginfo from './index.js'

it('Flightrunninginfo: default', () => {
  const component = renderer.create(<Flightrunninginfo />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})