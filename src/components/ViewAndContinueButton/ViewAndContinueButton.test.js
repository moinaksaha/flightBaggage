import React from 'react'
import renderer from 'react-test-renderer'
import Viewandcontinuebutton from './index.js'

it('Viewandcontinuebutton: default', () => {
  const component = renderer.create(<Viewandcontinuebutton />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})