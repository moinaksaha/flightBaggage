import React from 'react'
import renderer from 'react-test-renderer'
import Rightcontentwrapper from './index.js'

it('Rightcontentwrapper: default', () => {
  const component = renderer.create(<Rightcontentwrapper />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})