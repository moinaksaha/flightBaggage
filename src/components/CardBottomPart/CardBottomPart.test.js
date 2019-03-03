import React from 'react'
import renderer from 'react-test-renderer'
import Cardbottompart from './index.js'

it('Cardbottompart: default', () => {
  const component = renderer.create(<Cardbottompart />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})