import React from 'react'
import renderer from 'react-test-renderer'
import Leftsidebar from './index.js'

it('Leftsidebar: default', () => {
  const component = renderer.create(<Leftsidebar />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})