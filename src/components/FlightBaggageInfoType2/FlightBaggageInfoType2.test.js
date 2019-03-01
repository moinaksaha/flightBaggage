import React from 'react'
import renderer from 'react-test-renderer'
import Flightbaggageinfotype2 from './index.js'

it('Flightbaggageinfotype2: default', () => {
  const component = renderer.create(<Flightbaggageinfotype2 />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})