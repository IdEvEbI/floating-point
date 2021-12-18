import {add, sub} from '../src/lib/math'

test('add: 1 + 1 = 2', () => {
  expect(add(1, 1)).toBe(2)
})

test('sub: 1 - 2 = -1', () => {
  expect(sub(1, 2)).toBe(-1)
})
