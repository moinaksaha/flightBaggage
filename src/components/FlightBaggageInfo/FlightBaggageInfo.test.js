import React from 'react'
import renderer from 'react-test-renderer'
import Flightbaggageinfo from './index.js'

it('Flightbaggageinfo: default', () => {
  const component = renderer.create(<Flightbaggageinfo />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})