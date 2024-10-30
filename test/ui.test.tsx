import './helper'
import { afterEach, expect, test } from 'bun:test'
import { unmountAll } from 'epic-jsx'
import { render } from 'epic-jsx/test'
import { Richtext } from '../ui'

afterEach(unmountAll)

test('Content UI components are available.', () => {
  const { serialized } = render(<Richtext />)

  expect(serialized).toContain('This is the content')
})
