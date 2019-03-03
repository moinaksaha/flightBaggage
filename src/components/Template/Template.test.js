import React from 'react'
import renderer from 'react-test-renderer'
import Template from './index.js'

it('Template: default', () => {
  const component = renderer.create(<Template />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})