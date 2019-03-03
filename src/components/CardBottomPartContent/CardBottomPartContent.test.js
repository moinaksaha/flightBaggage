import React from 'react'
import renderer from 'react-test-renderer'
import Cardbottompartcontent from './index.js'

it('Cardbottompartcontent: default', () => {
  const component = renderer.create(<Cardbottompartcontent />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})