import { tag } from 'epic-tag'

const Wrapper = tag('div', 'flex p-sm background-gray color-white radius-small')

export function Richtext() {
  return <Wrapper contentEditable={true}>This is the content</Wrapper>
}
