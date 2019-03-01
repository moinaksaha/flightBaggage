import React from 'react'
import renderer from 'react-test-renderer'
import Flightdetailpage from './index.js'

it('Flightdetailpage: default', () => {
  const component = renderer.create(<Flightdetailpage />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})