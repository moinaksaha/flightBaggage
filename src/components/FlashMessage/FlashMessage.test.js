import React from 'react'
import renderer from 'react-test-renderer'
import Flashmessage from './index.js'

it('Flashmessage: default', () => {
  const component = renderer.create(<Flashmessage />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})