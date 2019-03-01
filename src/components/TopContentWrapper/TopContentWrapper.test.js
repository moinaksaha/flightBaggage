import React from 'react'
import renderer from 'react-test-renderer'
import Topcontentwrapper from './index.js'

it('Topcontentwrapper: default', () => {
  const component = renderer.create(<Topcontentwrapper />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})