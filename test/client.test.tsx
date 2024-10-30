import './helper'
import { afterEach, expect, test } from 'bun:test'
import { unmountAll } from 'epic-jsx'
import { render } from 'epic-jsx/test'
import { Slot } from '../client'

afterEach(unmountAll)

test('Renders client slots with content inside.', () => {
  const { serialized } = render(
    <div>
      <Slot>
        <p>content</p>
      </Slot>
    </div>,
  )

  expect(serialized).toEqual('<body><div><div><p>content</p></div></div></body>')
})
